import CallList from '@/components/CallList'
import React from 'react'

const Recordings = () => {
    return (
        <section className='flex size-full flex-col gap-10 text-palette-4'>
            <h1 className='text-3xl font-bold'>
                View Recordings
            </h1>
            <CallList type='recordings' />
        </section>
    )
}

export default Recordings