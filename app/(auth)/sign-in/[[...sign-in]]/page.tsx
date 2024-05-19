import { SignIn } from '@clerk/nextjs'
import React from 'react'
// the folder here has a weird name, [[...sign-in]], this is to ensure that all of the routes we get that have sign-in in them, we need them to come here. 

const SignInPage = () => {
    return (
        <main className='flex h-screen w-full justify-center items-center '>

            <SignIn />


        </main>
    )
}

export default SignInPage