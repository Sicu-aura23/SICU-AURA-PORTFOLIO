import React from 'react'
import Image from 'next/image'
import Phone from '@/public/Phone4.svg'
import { Button } from '@chakra-ui/react'
import Twitter from '@/public/twitter.png'
import Twitter1 from '@/public/twitter1.png'
import TwitterBird from '@/public/twitter-bird.png'
import { FaInstagram } from "react-icons/fa";
import instagram from '@/public/ig.png'

export default function Frame1 () {
  return (
    <section className='flex md:flex-row flex-wrap my-12 mx-12 h-[700px]'>
            <div className=' md:flex-1 md:flex md:items-center frame1'>
                <img src='https://parspng.com/wp-content/uploads/2022/10/instagramiconspng.parspng.com-2.png' className='mt-12 w-[90%]' alt='Phone' />
               
            </div>
            <div className='flex-1 flex flex-col justify-around  min-h-fit'>
                <p className=' font-Inknut text-4xl font-light'>Follow Us on</p>
                {/* <img src='https://logospng.org/download/instagram/logo-instagram-4096.png' className='w-[400px]' alt='Phone' /> */}
                <div className='flex flex-row items-center '   >
                <Image onClick={()=>window.open('https://instagram.com/sicu.aura')}  className=' hover:cursor-pointer py-[10%] w-[70%]' src={instagram}/> 

                </div>
                <p className=' text-sm font-Inknut md:text-lg font-normal'>Get the opportunity to experience Next Generation SOS System at first. 200 users will be selected as a Beta Tester on a first come first serve basis. Testing will be done in 8 phases. Each phase’s duration will be 7 days and there will be 200 Testers.</p>
              
                <Button onClick={()=>window.open('https://www.instagram.com/dream_is_live_/')} leftIcon={<FaInstagram  className='text-[#ed5067] md:text-4xl' />} className='bg-white border rounded-full text-black font-Inknut font-semibold md:text-xl w-64 md:p-8'>
                    Follow us 
                </Button>
            </div>
    </section>
  )
}
