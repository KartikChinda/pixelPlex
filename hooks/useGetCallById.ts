import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCallById = (id: string) => {
    const [currentCall, setcurrentCall] = useState<Call>()

    // can be done without it as well, we are just streamlining loading. 
    const [isCallLoading, setisCallLoading] = useState(false)

    const client = useStreamVideoClient();

    // why the useEffect? Essentially you will have an array of calls, in the Stream location, right? So there, if an x user comes, there is a client change so we need to fetch the new call. Or, if a new meeting id is created, we need to again fetch a new call. 
    useEffect(() => {

        if (!client) return;

        // do you know why the code here was created in this way and not normally? Because loadCall needs to do some async work. 
        const loadCall = async () => {
            // directly from the documentation 
            const { calls } = await client.queryCalls({
                filter_conditions: { id }
            })

            if (calls.length > 0) setcurrentCall(calls[0]);
            setisCallLoading(false);
        }
        loadCall();
    }, [client, id])


    return { currentCall, isCallLoading };

}