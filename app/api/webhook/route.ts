import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  console.log("Received Webhook:", body);
  console.log("Signature:", signature);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error("Error constructing event:", error);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  console.log("Event:", event);

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;
  const courseId = session?.metadata?.courseId;

  console.log("Session:", session);

  if (event.type === "checkout.session.completed") {
    if (!userId || !courseId) {
      console.error("Missing metadata:", { userId, courseId });
      return new NextResponse(`Webhook Error: Missing metadata`, { status: 400 });
    }

    try {
      await db.purchase.create({
        data: {
          courseId: courseId,
          userId: userId,
        }
      });
      console.log("Purchase recorded:", { userId, courseId });
    } catch (error: any) {
      console.error("Database error:", error);
      return new NextResponse(`Database Error: ${error.message}`, { status: 500 });
    }
  } else {
    console.warn("Unhandled event type:", event.type);
    return new NextResponse(`Webhook Error: Unhandled event type ${event.type}`, { status: 200 });
  }

  return new NextResponse(null, { status: 200 });
}
