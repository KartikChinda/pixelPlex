import Image from 'next/image'
import React from 'react'

const LoadingCircle = () => {
    return (
        <div className='flext justify-center items-center h-screen w-full '>
            <Image src="/icons/loading-circle.svg" alt='LoadingCircle' width={50} height={50} />
        </div>
    )
}

export default LoadingCircle