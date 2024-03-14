'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import './header.css'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState()

    return (
        <div className='header-container'>
            <div className="header-logo-wrapper">
                <h1>Drukpas Chat</h1>
            </div>
            { isLoggedIn ? (
                <div className="header-link-wrapper">
                    <Link href={'/profile'} >Profile</Link>
                    <Link href={'/profile'} >Chats</Link>
                    <Avatar className='cursor-pointer'>
                        <AvatarImage />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                </div>
            ) : (
                <div className="header-link-wrapper">
                    <Link href={'/auth/register'} >Register</Link>
                    <Link href={'/auth/signin'} >SignIn</Link>
                    <Avatar className='cursor-pointer'>
                        <AvatarImage />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                </div>
            )}
        </div>
    )
}

export default Header