"use client";
import React from 'react';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {

    const pathName = usePathname();

    return (
        <section className='sticky left-0 top-0 flex flex-col h-screen w-fit justify-between bg-palette-2 p-6 pt-28 text-palette-4 hidden md:block md:w-[270px]'>
            <div className='flex flex-col gap-6'>
                {sidebarLinks.map((link) => {

                    return (
                        <Link href={link.route} key={link.label} className='flex gap-3 items-center p-4 text-white rounded-lg font-bold justify-start ' style={pathName === link.route ? { backgroundImage: "linear-gradient(to right, #AD6EFB , #FFA66C)" } : { backgroundImage: "" }}>
                            <Image src={link.imgUrl} alt={link.label} width={22} height={22} />
                            {link.label}
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar