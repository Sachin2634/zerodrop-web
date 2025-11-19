'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    const [active, setActive] = useState<string>('')

    const handleRouteChange = (route: string) => {
        setActive(route)
        router.push(route ? `/${route}` : '/')
    }

    const routes = [
        { key: '', label: 'Home' },
        { key: 'plans', label: 'Plans' },
        { key: 'aboutus', label: 'About Us' },
        { key: 'contactus', label: 'Contact Us' },
    ]

    return (
        <>
            <div className='h-20 w-full px-16 bg-white fixed flex justify-between items-center shadow-lg'>
                <img src="/images/logo.png" alt="Zerodrop" className='h-20' />
                <div className='flex ml-16 gap-20 items-center'>
                    {routes.map((route) => (
                        <div
                            key={route.key || 'home'}
                            onClick={() => handleRouteChange(route.key)}
                            className={`cursor-pointer hover:scale-110 duration-100 ${active === route.key ? 'border-b-2 border-[#419E5B]' : 'text-black'}`}
                        >
                            {route.label}
                        </div>
                    ))}
                </div>
                <div className='flex gap-2 ml-4 justify-end'>
                    <button className='border-[#419E5B] border-2 px-4 py-0.5 rounded-full'>Sign In</button>
                    <button className='bg-[#419E5B] text-white px-4 py-0.5 rounded-full'>Try Now</button>
                </div>
            </div>
        </>
    )
}

export default Navbar