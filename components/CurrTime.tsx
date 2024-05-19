"use client";
import React, { useState, useEffect } from 'react'

const CurrTime = () => {
    const [timeNow, settimeNow] = useState(new Date());
    useEffect(() => {

        const interval = setInterval(() => {
            settimeNow(new Date());
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>


            <p className='text-sm italic text-slate-400'>It is currently </p>
            <div className='font-extrabold text-4xl md:text-6xl'>
                {timeNow.toLocaleTimeString('en-US')}
            </div>
            <p className='text-sm mt-2 italic text-slate-400'>on</p>
            <div className='font-semibold  text-md'>
                {(new Intl.DateTimeFormat('en-US', { dateStyle: "full" })).format(timeNow)}
            </div>
        </div>
    )
}

export default CurrTime