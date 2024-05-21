import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
    return (
        <section className='flex size-full flex-col gap-10 text-palette-4'>
            <h1 className='text-3xl font-bold'>
                Upcoming Meetings
            </h1>
            <CallList />
        </section>
    )
}

export default Upcoming