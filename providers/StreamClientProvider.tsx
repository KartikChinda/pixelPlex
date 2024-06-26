// directly copied from stream installation. Essentially is boilerplate code. 
"use client";
import { tokenProvider } from '@/actions/stream.actions';
import { useUser } from '@clerk/nextjs';
import {

    StreamVideo,
    StreamVideoClient,

} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

import LoadingCircle from '@/components/LoadingCircle';

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
            tokenProvider: tokenProvider,
        })
        setvideoClient(newClient);


    }, [user, isLoaded])

    if (!videoClient) return (<LoadingCircle />)

    return (
        <StreamVideo client={videoClient}>
            {/* voila, infused your application with the streamVideoClient.  */}
            {/* What children do you want here though? Not the absolute basic app layout, because there you need to authenticate a user first. No, you need this in the rootLayout, where your home resides, because this all will happen only once you have logged in.  */}
            {children}
        </StreamVideo>
    );
};

export default StreamVideoProvider; 