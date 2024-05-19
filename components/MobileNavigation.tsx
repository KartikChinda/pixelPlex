"use client";
import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';


const MobileNavigation = () => {
    const pathName = usePathname();
    return (
        <section className='w-full max-w-[270px]'>
            <Sheet>
                {/* adding an asChild to a component means that it will appear as a child to it's parent component. Useful when you want to add styles that need a parent and a child. */}
                <SheetTrigger asChild>
                    <Image src="/icons/hamburger.svg"
                        width={36} height={36} alt='hamburgerIcon' className='md:hidden' />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-palette-2'>
                    <div className='flex justify-start items-center gap-1'>
                        <Link href="/" className='flex items-center gap-2'>
                            <Image src="/icons/logo.svg" width={32} height={32} alt='PixelPlex' className='size-10' />
                        </Link>
                        <p className='text-[20px] font-extrabold text-palette-4 '>PixelPlex</p>
                    </div>
                    <div className='flex flex-col justify-between h-full'>
                        <SheetClose asChild>
                            <section className='flex flex-col gap-6 pt-10 text-palette-4' >
                                {sidebarLinks.map((link) => {

                                    return (
                                        // asChild just needs to be added more than most times. Here if you dont add it, the sidebar wont close. 
                                        <SheetClose asChild id={link.label}>
                                            {/* wrapping them up in a sheetClose component so we can close the sidebar on the click of a component.  */}
                                            <Link href={link.route} key={link.label} className='flex gap-3 items-center p-4 text-white rounded-lg font-bold justify-start ' style={pathName === link.route || pathName.startsWith(`${link.route}/`) ? { backgroundImage: "linear-gradient(to right, #AD6EFB , #FFA66C)" } : { backgroundImage: "" }}>
                                                <Image src={link.imgUrl} alt={link.label} width={22} height={22} />
                                                <p className=''>{link.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>
                        </SheetClose>
                    </div>

                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNavigation