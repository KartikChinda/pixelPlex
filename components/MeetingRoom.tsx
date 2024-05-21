import { CallControls, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React from 'react'

const MeetingRoom = () => {
    return (
        <section className='flex-col overflow-hidden items-center p-2 h-[100vh] w-[100vw] '>
            <div className='hidden md:flex h-screen justify-center items-center'>
                <SpeakerLayout participantsBarPosition="right" />
            </div>
            <div className='md:hidden flex h-screen justify-center items-center'>
                <PaginatedGridLayout />

            </div>
            <div className='fixed bottom-1 flex w-full justify-center items-center '>
                <CallControls />
            </div>





        </section >
    )
}

export default MeetingRoom