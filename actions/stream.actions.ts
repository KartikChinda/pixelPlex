"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

// if everything is server side by default in next, then why do we need to add a useServer here? 

// this right here is done to make sure that A) our secret remains only on the client side, and more importantly, every part of what is written here is written to be executed on the backend, and no part of this needs to go to the client. To understand, this is just an API running off of a node-express server. 

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;


export const tokenProvider = async () => {
    const currUser = await currentUser(); //comes from clerk. 

    if (!currUser) throw new Error("User is not currently logged in. ");
    if (!apiKey) throw new Error("API key not found");
    if (!apiSecret) throw new Error("API secret not found.");


    // creating the new client and then shipping it off to the client side. 
    const streamClient = new StreamClient(apiKey, apiSecret); //this is coming off of node, not react like the rest of the app, evidently so. 


    const expiredAt = Math.round(new Date().getTime() / 1000) + 60 * 60; //the getTime func gets you the time in seconds, to that we are adding an hour (60*60), so this token works for an hour. 

    const issuedAt = Math.floor(Date.now() / 1000) - 60 * 60;


    // token creation (all of this is copied off of the documentation so dont worry on how to call it). 
    const token = streamClient.createToken(currUser.id, expiredAt, issuedAt);

    return token;
}