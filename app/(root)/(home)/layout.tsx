import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <section className='flex flex-col min-h-screen flex-1 md:px-6 pb-6 pt-28 px-14 md:pb-14'>
                    <div className="w-full">
                        {children}
                    </div>
                </section>
            </div>


        </main>
    )
}

export default HomeLayout