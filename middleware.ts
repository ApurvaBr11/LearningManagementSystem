

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

const isPublicRoute = createRouteMatcher([
  '/api/webhook'
]);

export default clerkMiddleware(async (auth, req: NextRequest, event) => {
  if (!isPublicRoute(req)) {
    await auth().protect();
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.\\w+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

 

// import { authMiddleware } from "@clerk/nextjs";
 
// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
// export default authMiddleware({
//       publicRoutes : ['/api/webhook','/']
// });
 
// export const config = {
//       matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
 