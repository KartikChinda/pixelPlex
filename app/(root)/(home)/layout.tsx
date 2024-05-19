import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='relative'>
            Navbar goes here.
            <div className="flex">
                SideBar goes here
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