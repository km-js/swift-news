'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'
import DarkmodeButton from './DarkmodeButton'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <div className='grid grid-cols-3 items-center py-4 px-14'>
                <div>
                    <Bars3Icon className='w-8 lg:w-14 cursor-pointer' onClick={toggleMenu} />
                    <div className={`bg-slate-900 p-6 absolute flex flex-col ${isOpen ? 'block' : 'hidden'}`}>
                        <a href="/" className="text-white p-2">Home</a>
                        <a href="/about" className="text-white p-2">About</a>
                        <a className="text-white p-2" href="https://twitter.com/WebDevWizGirl" target='_blank' >Contact</a>
                    </div>
                </div>

                <Link className='mx-auto' href='/' prefetch={false}>
                    <img className=' h-10 lg:h-20' src='/images/logo.png' alt="logo" />
                </Link>

                <div className='flex items-center justify-end space-x-2'>
                    <DarkmodeButton />
                    <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
                        Subscribe Now
                    </button>
                </div>
            </div>
            <NavLinks />
            <SearchBox />
        </header>




    )
}

export default Header