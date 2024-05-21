
import { CallControls, CallStatsButton, CancelCallButton, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useToast } from './ui/use-toast';

const MeetingRoom = () => {

    const router = useRouter();
    const { toast } = useToast();

    const handleLeave = () => {
        router.push("/");
        toast({ title: "Left meeting." })
    }



    return (
        <section className='flex-col overflow-hidden items-center p-2 h-[100vh] w-[100vw] '>
            <div className='hidden md:flex md:h-screen md:justify-center md:items-center md:object-contain'>
                <SpeakerLayout participantsBarPosition="right" />
            </div>
            <div className='md:hidden flex h-screen justify-center items-center'>
                <PaginatedGridLayout />

            </div>
            <div className='fixed bottom-1 flex w-full justify-center items-center gap-2 '>
                <CallControls onLeave={handleLeave} />

                <CallStatsButton />
            </div>





        </section >
    )
}

export default MeetingRoom