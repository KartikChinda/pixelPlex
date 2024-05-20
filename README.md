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


- Model created, now we have to create the entire functionality of createMeetings. Most of it is done in providers, and that is where stream resides. Providers are essentially components that wrap up our entire application and provide functionality wherever needed. 
    - Why did we use Stream and not something like webRTC maybe? 
        - webRTC is used to transfer files or streams but it is across two peers. So, here adding another user would have taken a massive hit on the performance, and successively with each addition, the performance would have gone down substantially because webrtc is built on top of UDP and uses a mesh topology, which becomes increasingly expensive with adding more clients. 
        - So how do googleMeet and zoom do it? They use Selective Forwarding, where all peers talk to a central virtual machine, where what it does is say that a new peer comes to the meet, then the virtual machine creates a composed stream of all the users before, and adds in the new peer. But developing this on your own is a hassle, so we use stream. 


- Now in the Providers: 
    - Copy the boilerplate code from Stream to init. 
    - Create your client by taking information about the user from Clerk. 
    - Create the tokenProviders, in a server side rendered page. 
    - Import this tokenProviders inside the creation of a client function. 
    - Before closing this, also make sure that if the client is undefined, you fire up a loading spinner. 

- Wrap the children of the root in the app in this provider. 

- Now that you finally have stream working, go back to the createMeeting in the meetingCards and create a meeting. 

- Add toasts from shadCn to display popups of if meeting has been created, if it failed etc. Just go through the documentation for it. 

- Now you can go to the meetingPage and start rendering it up, if the call is set there, then you go ahead and show the meetingRoom component, else redirect to the meetingSetup. 

- Once this is done, and your setup is finished, what call do you have to go into? For that we are making a new hook. 