import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// so here is the spiel, before clerk, if you were to implement nextAuth on your own, you would have to share the data of userLoggedIn in probably a global store and at each endpoint check if user is logged in or not. If logged in, you show the component and if not, you redirect to log-in page. Clerk removes all this by the concept of protectedRoutes 

const protectedRoutes = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)' //ie anything post meeting will be considered, since we have different unknown ID's for meetings. 
])

export default clerkMiddleware((auth, req) => {
    // syntax of that redirection essentially. 
    if (protectedRoutes(req)) auth().protect();
});

export const config = {
    matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};