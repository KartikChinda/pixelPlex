"use client";
import { useGetCalls } from '@/hooks/useGetCalls'
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import CallCard from './CallCard';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {


    const { endedCalls, upcomingCalls, recordings, isLoading } = useGetCalls();
    const [currentRecords, setcurrentRecords] = useState<CallRecording[]>([])

    const router = useRouter();
    const whatCallsToFetch = () => {
        switch (type) {
            case "ended":
                return endedCalls;

            case "upcoming":
                return upcomingCalls;

            case "recordings":
                return recordings;

            default:
                return [];
        }
    }

    const messageOnNoCalls = () => {
        switch (type) {
            case 'ended':
                return 'No Previous meetings found.';
            case 'upcoming':
                return 'No Upcoming meetings found.';
            case 'recordings':
                return 'No Recordings found.';
            default:
                return '';
        }
    };

    // what calls are we getting? 
    const currTypeCalls = whatCallsToFetch();
    const currMessageOnNoCalls = messageOnNoCalls();


    return (
        <div className='grid gri-cols-1 gap-5 lg:grid-cols-2'>

            {currTypeCalls && currTypeCalls.length > 0 ? (
                currTypeCalls.map((meeting: Call | CallRecording) => (
                    <CallCard
                        key={(meeting as Call).id} //typescript error, just tells the compiter that this object is def the object written in the as part. It is basically type assertion. 
                        icon={
                            type === "ended" ? '/icons/previous.svg' : type === "upcoming" ? '/icons/upcoming.svg' : '/icons/recordings.svg'
                        }
                        title={(meeting as Call).state.custom.description.substring(0, 25) || "No description given."}

                        // the issue here is with the meeting.state, if meeting is a call, then it will have a state. If it is a recording, then not. 
                        date={(meeting as Call).state.startsAt?.toLocaleString() || (meeting as CallRecording).start_time.toLocaleString()}

                        // to check if we need to show the buttons or not 
                        isPreviousMeeting={type === 'ended'}
                        link={
                            type === 'recordings'
                                ? (meeting as CallRecording).url
                                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${(meeting as Call).id}`
                        }
                        buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
                        buttonText={type === 'recordings' ? 'Play' : 'Start'}
                        handleClick={
                            type === 'recordings'
                                ? () => router.push(`${(meeting as CallRecording).url}`)
                                : () => router.push(`/meeting/${(meeting as Call).id}`)
                        }
                    />
                ))
            ) : (
                <h1 className=' font-xl'>{currMessageOnNoCalls}</h1>
            )}
        </div>
    )
}

export default CallList