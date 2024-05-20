"use client";
import LoadingCircle from '@/components/LoadingCircle';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

// Here in the props, you can only name the params as what you have named the [folderName]. 
const Meeting = ({ params: { id } }: { params: { id: string } }) => {

    const { user, isLoaded } = useUser();

    // seeing if the audio and video setup is complete, initially it is not. 
    const [isSetupComplete, setisSetupComplete] = useState(false);

    const { call, isCallLoading } = useGetCallById(id);

    // the things we do for the user. 
    if (!isLoaded || isCallLoading) return <LoadingCircle />

    return (
        <div className='h-screen w-full'>
            <StreamCall call={call}>
                <StreamTheme>
                    {isSetupComplete ? (<MeetingRoom />) : (<MeetingSetup setisSetupComplete={setisSetupComplete} />)}
                </StreamTheme>
            </StreamCall>
        </div>
    )
}

export default Meeting