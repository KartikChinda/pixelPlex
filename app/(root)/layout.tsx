import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='text-[#D4D7ED]'>{children}</main>
    )
}

export default RootLayout