import React from 'react'
import Image from 'next/image'
import Phone from '@/public/Phone3.svg'
import { Button } from '@chakra-ui/react'
import Facebook from '@/public/facebook.svg'
import { FaFacebookSquare } from "react-icons/fa";


export default function Frame1 () {
  return (
    <section className='flex md:flex-row flex-wrap my-12 mx-12 h-[700px]'>
            <div className=' flex-1'>
                <Image src={Phone} className='mt-[5%] '  alt='Phone' />
            </div>
            <div className='flex-1 flex flex-col justify-around gap-4 min-h-fit mx-20'>
              <div className=' flex justify-start me-[8%]'>

                <p className=' font-Inknut text-4xl font-light'>Follow Us on</p>
              </div>
                <Image src={Facebook} className='w-[80%] ' alt='Phone' />
                <p>

                <p className=' font-Inknut text-lg font-normal'>Get the opportunity to experience Next Generation SOS System at first. 200 users will be selected as a Beta Tester</p>
                 <h6  className=' font-Inknut text-lg font-normal'>on a first come first serve basis.</h6>
                </p>
                <div className=' flex justify-start'>

                <Button onClick={()=>window.open('https://www.facebook.com/profile.php?id=100092369332099&mibextid=LQQJ4d')} leftIcon={<FaFacebookSquare className='text-blue-600 text-4xl' />} className= ' bg-white border rounded-full text-black font-Inknut font-semibold text-xl w-64 p-8 '>
                    Follow us 
                </Button>
                </div>
            </div>
    </section>

  )
}
