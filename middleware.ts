


import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


const isPublicRoute = createRouteMatcher([
  '/api/webhook'
]);



export default clerkMiddleware(
  (auth,req)=>{
  if (req != isPublicRoute ) {
    auth().protect();
  }
      return NextResponse.next()
    
    }
);
    


// (auth,req,event)=>{
//   if (!isPublicRoute(req)) {
//     auth().protect();
//   }
//       return NextResponse.next()
    
//     }
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
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
 
