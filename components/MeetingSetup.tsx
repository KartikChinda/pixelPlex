"use client";
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({
    setisSetupComplete,
}: {
    setisSetupComplete: (value: boolean) => void;
}) => {
    const [isaudiovideoON, setisaudiovideoON] = useState(false);

    const call = useCall();

    // we want to rerender this based on wether the cam and mic options get enabled or not. 
    useEffect(() => {
        // toggle is happening, nothing else 
        if (isaudiovideoON) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable();
        }


    }, [isaudiovideoON, call?.camera, call?.microphone])


    const handleClick = () => {
        call?.join();
        setisSetupComplete(true);
    }


    return (
        <div className='flex h-screen flex-col w-[90%] items-center justify-center gap-5 text-palette-4 mx-auto'>

            <h1 className='text-2xl font-bold'>Ready to join the meeting? </h1>

            <VideoPreview />

            <div className='flex h-16 items-center justify-center gap-3'>
                <label className='flex items-center justify-center gap-2 font-medium'>
                    <input type='checkbox' checked={isaudiovideoON} onChange={(e) => setisaudiovideoON(e.target.checked)} />
                    Join with mic and camera off.

                </label>
                {/* this is not working, need to check why that is.  */}
                {/* <DeviceSettings /> */}
            </div>
            <Button className='rounded-lg px-3 py-2 bg-palette-3 text-palette-1 hover:border-2 hover:border-palette-3 hover:bg-palette-2 font-bold text-md hover:text-palette-4 ' onClick={handleClick}>
                Join meeting
            </Button>
        </div>
    )
}

export default MeetingSetup