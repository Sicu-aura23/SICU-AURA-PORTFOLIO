'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar2 = () => {
    const pathname = usePathname()

  return (
    <header className='text-black w-screen h-fit flex-row flex mt-2  gap-56 items-start'>
        <div className='flex flex-row gap-4 items-center mx-6 w-11/12 border-b border-gray-300 p-2'>
            <Link href='/'>
                <Image src={Logo} alt="phone" className="w-auto h-auto" width='160' height='60' />
            </Link>
            <p className=' font-Inknut font-bold text-xl '>|</p>
            <p className=' font-Inknut font-normal text-xl '>Career</p>
        </div>
    </header>
  )
}

export default Navbar2