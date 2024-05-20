"use client";
import React, { useState } from 'react';
import MeetingCard from './Meeting/MeetingCard';
import { useRouter } from 'next/navigation';
import Modal from './Meeting/Modal'
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from '../ui/use-toast';

const MeetingCards = () => {

    const router = useRouter();

    const [meetingState, setmeetingState] = useState<"isJoiningMeeting" | "isInstantMeeting" | "isScheduleMeeting" | undefined>()

    // for toast 
    const { toast } = useToast();

    // this part is for the creation of a meeting
    const user = useUser();
    const client = useStreamVideoClient();
    const [callValues, setCallValues] = useState({
        dateTime: new Date(),
        description: '',
        link: '',
    })

    const [createdCallDetails, setcreatedCallDetails] = useState<Call>()


    const createMeeting = async () => {
        // follow the creating a call section here: https://getstream.io/video/docs/api/
        if (!client || !user) return;

        // this is if you want to schedule calls. 
        if (!callValues.dateTime) {
            toast({ title: "Please enter a date and a time to schedule a meeting. " })
            return;
        }



        try {
            const callId = crypto.randomUUID(); // global property of Js. 
            const call = client.call('default', callId);
            if (!call) throw new Error("Failed to create a call. ")

            // here we needed to add the || because of typescript. Oh how I love typescript. 
            const meetingStartsAt = callValues.dateTime.toISOString() || new Date(Date.now()).toISOString();
            const description = callValues.description || "This is an instant meeting. ";

            await call.getOrCreate({
                data: {
                    starts_at: meetingStartsAt,
                    custom: {
                        description
                    }
                }
            })

            setcreatedCallDetails(call);
            router.push(`/meeting/${call.id}`)
            toast({ title: "Meeting created!" })


        } catch (error) {
            console.log("This error is from creating a meeting: ", error);
            toast({ title: "Failed to create a meeting." })
        }


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