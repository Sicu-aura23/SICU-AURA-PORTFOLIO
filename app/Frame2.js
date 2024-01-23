import React from 'react'
import Image from 'next/image'
import Phone from '@/public/Phone2.svg'
import Linkedin from '@/public/Linkedin.svg'
import { FaLinkedin } from "react-icons/fa";
import { Button } from '@chakra-ui/react'

export default function Frame1 () {
  return (
    <section className='flex md:flex-row flex-wrap my-12 h-[700px] mx-12'>
            <div className='flex-1 flex flex-col justify-around gap-6 min-h-fit'>
                <p className=' font-Inknut text-4xl font-light'>Follow Us on</p>
                <Image src={Linkedin} className='  ' alt='Phone' />
                <div style={{maxWidth:"770px"}}>
                <p className=' font-Inknut text-lg font-normal'>Sicu-aura is committed to providing its customers with the highest quality technologies and services. We encourage you to follow us on LinkedIn and join our community of our innovative journey. We look forward to connecting with you!</p>

                </div>
                <Button onClick={()=>window.open('https://www.linkedin.com/company/sicu-aura/')}  leftIcon={<FaLinkedin className='text-blue-600 text-4xl' />} className='bg-white border rounded-full text-black font-Inknut font-semibold text-xl w-64 p-8'>
                    Follow us 
                </Button>
            </div>
            <div className=' flex-2'>
                <Image src={Phone} className='w-[90%] mt-[15%]' alt='Phone' />
            </div>
    </section>
  )
}
