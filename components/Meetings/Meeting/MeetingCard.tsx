import Image from 'next/image'
import React from 'react'

interface meeting {
    img: string,
    title: string,
    description: string,
    handleClick: () => void,
    color: string,
}

const MeetingCard = ({ img, title, description, handleClick, color }: meeting) => {
    return (

        <div className='flex flex-col justify-between items-start w-full min-h-[260px] rounded-xl cursor-pointer p-4 group' style={{ backgroundColor: color }} onClick={handleClick}>
            <div className='size-12  group-hover:size-14 duration-75 bg-black  rounded-xl flex justify-center items-center border-2 border-palette-2'>
                <Image src={img} alt='icon type' width={28} height={28} />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold text-palette-4 group-hover:text-[26px] duration-75'>{title}</h1>
                <p className='text-lg font-normal text-palette-4 group-hover:text-[19px] duration-75'>{description}</p>
            </div>

        </div>
    )
}

export default MeetingCard