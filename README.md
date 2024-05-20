# P I X E L   P L E X 

Welcome, to PixelPlex. 


- Using Stream because it is currently in use by Adobe, Soundcloud, Imgur etc. 
- Using clerk because why not. 

- Tech used: NextJs 14, Shadcn-UI, Clerk for auth,  

Steps: 
- Added routes and fixed folder structure by adding root and auth as the (grouped routes), meeting and [id] as the slug routes, and just adding normal pages. 

- Create components for the navbar and the sidebar, start working on those. 

- For the sidebar, create your constants folder and add all the links and the routes in an array there. 

- Pertaining to values in the sidebar, create the components to be rendered on the right side like home, upcoming etc. 

- Time to create the navbar. Pretty simple in the desktop version, but for the mobile version we are using the shadCn sheet component to work on a self closing hamburger component, so develop that. 

- Auth using clerk, just follow these steps: 
    1. npm install @clerk/nextjs
    2. Set up env variables. 
    3. Create middleware.ts in the root directory and copy paste the code given. 
    4. Add clerkProvider to the layout of the app.  
    5. Inside the middleware, set up protected routes. 

- Set up the route you want to take for signIn and signUp in the env file, and then design them. 
- Do the step above for signUp as well. 

- toDo: fix authColor and fix authForDifferentPages. 

- Work on the hero section of the homePage, where you add the time in a way that only the time is rendered on the client side. 

- Now, work on the meeting Cards, add their UI, make the cards reusable. 

- On clicking these cards, we need to open up some form of a modal, for say starting a new meeting or joining a meeting etc, so now work on creating that model. 


- Model created, now we have to create the entire functionality of createMeetings. 