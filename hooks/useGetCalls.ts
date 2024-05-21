"use client";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCalls = () => {
    const [calls, setcalls] = useState<Call[]>([]);
    const [isLoading, setisLoading] = useState(false);

    // client stores the info about calLS. 
    const client = useStreamVideoClient();
    // we need calls pertaining to a given user. 
    const { user } = useUser();


    useEffect(() => {
        // async funcs return promises, but useEffect expects its functions to return either a cleanup func or nothing at all. 
        const loadCalls = async () => {
            if (!user?.id || !client) return false;
            setisLoading(true);
            try {
                // https://getstream.io/video/docs/react/guides/querying-calls/#filters
                const { calls } = await client.queryCalls({
                    // sorting them out by the time they are starting, since we need to show upcoming calls. 
                    sort: [{ field: 'starts_at', direction: -1 }],
                    filter_conditions: {
                        // there should be a starts at, ie, upcoming 
                        starts_at: { $exists: true },
                        // or, if the user has created them, or the user is present in them 
                        $or: [
                            { created_by_user_id: user.id },
                            { members: { $in: [user.id] } },
                        ],
                    },
                });

                setcalls(calls);
            } catch (error) {
                console.log("Error is in the callList", error);
            } finally {
                setisLoading(false);
            }
        }


        loadCalls();

    }, [client, user?.id])


    const now = new Date();
    // essentially, if the call has ended before now, then it is endedCall, otherwise it is started call.

    // !! is used to convert an object into a boolean, so if obj -> 0, null, undefined, the first ! makes it true, the second makes it false, ie object converted to its boolean representation. 
    const endedCalls = calls?.filter(({ state: { startsAt, endedAt } }: Call) => {
        return (startsAt && new Date(startsAt) < now) || !!endedAt
    })

    const upcomingCalls = calls?.filter(({ state: { startsAt } }: Call) => {
        return startsAt && new Date(startsAt) > now
    })


    // returning it together so we dont have to write the code logic here and there everytime. 
    return {
        endedCalls,
        upcomingCalls,
        callRecordings: calls,
        isLoading,
    }

}