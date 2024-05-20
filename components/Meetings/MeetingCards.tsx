"use client";
import React, { useState } from 'react';
import MeetingCard from './Meeting/MeetingCard';
import { useRouter } from 'next/navigation';
import Modal from './Meeting/Modal'

const MeetingCards = () => {

    const router = useRouter();

    const [meetingState, setmeetingState] = useState<"isJoiningMeeting" | "isInstantMeeting" | "isScheduleMeeting" | undefined>()

    const createMeeting = () => {

    }

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
            <MeetingCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                handleClick={() => setmeetingState('isInstantMeeting')}
                color="#A56CFF"

            />
            <MeetingCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                description="via invitation link"
                handleClick={() => setmeetingState('isJoiningMeeting')}
                color="#FFAB63"

            />
            <MeetingCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"

                handleClick={() => setmeetingState('isScheduleMeeting')}
                color="#EB73D0"

            />
            <MeetingCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Meeting Recordings"
                handleClick={() => router.push('/recordings')}
                color="#FF8D92"

            />

            <Modal
                isOpen={meetingState === "isInstantMeeting"}
                onClose={() => setmeetingState(undefined)}
                title="Start an instant meeting"
                buttonText='Start meeting'
                handleClick={createMeeting}
            />
        </section>
    )
}

export default MeetingCards