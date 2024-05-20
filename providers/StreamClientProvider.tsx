// directly copied from stream installation. Essentially is boilerplate code. 
"use client";
import { useUser } from '@clerk/nextjs';
import {

    StreamVideo,
    StreamVideoClient,

} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
import { Stream } from 'stream';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {

    // all of this is essentially boilterplate setup so dont think on how it is done for now, this is a blackbox essentially. 

    const [videoClient, setvideoClient] = useState<StreamVideoClient>();

    // we want this to render a client whenever there is a change in the user, ie whenever a new clerk user logs in. So we take the user from clerk and then render the client in a useEffect. 
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!user || !isLoaded) return;
        if (!apiKey) throw new Error("The API key is missing for Stream.")

        const newClient = new StreamVideoClient({
            apiKey,
            user: {
                // all of this comes from clerk 
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            // middle auth sart of a thing to confirm that clerk and stream both are talking about the same user. 
            tokenProvider,
        })


    }, [user, isLoaded])


    return (
        <StreamVideo client={videoClient}>

        </StreamVideo>
    );
};

export default StreamVideoProvider; 