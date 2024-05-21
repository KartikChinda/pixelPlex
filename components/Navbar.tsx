import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import MobileNavigation from './MobileNavigation';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
    return (
        <nav className='flex justify-between  fixed z-30 w-full px-6 py-4 lg:px-10 bg-palette-2 text-palette-4 '>
            <Link href="/" className='flex items-center gap-2'>
                <Image src="/icons/logo.svg" width={32} height={32} alt='PixelPlex' className='size-10' />
                <p className='text-[25px] font-extrabold text-palette-4 hidden md:block'>PixelPlex</p>
            </Link>

            {/* mobile navigation goes here */}
            <div className="flex justify-center items-center gap-5 text-palette-4">
                {/* Clerk authentification added here.  */}
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <MobileNavigation />
            </div>


        </nav>
    )
}

export default Navbar