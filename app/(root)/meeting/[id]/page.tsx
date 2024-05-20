"use client";
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

// Here in the props, you can only name the params as what you have named the [folderName]. 
const Meeting = ({ params }: { params: { id: string } }) => {

    const { user, isLoaded } = useUser();

    // seeing if the audio and video setup is complete, initially it is not. 
    const [isSetupComplete, setisSetupComplete] = useState(false)


    return (
        <div className='h-screen w-full'>
            <StreamCall>
                <StreamTheme>
                    {isSetupComplete ? <MeetingRoom /> : <MeetingSetup />}
                </StreamTheme>
            </StreamCall>
        </div>
    )
}

export default Meeting