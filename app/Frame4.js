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
            <div className=' flex-1 flex items-center'>
                <img src='https://parspng.com/wp-content/uploads/2022/10/instagramiconspng.parspng.com-2.png' className='mt-12 w-[90%]' alt='Phone' />
               
            </div>
            <div className='flex-1 flex flex-col justify-around  min-h-fit'>
                <p className=' font-Inknut text-4xl font-light'>Follow Us on</p>
                {/* <img src='https://logospng.org/download/instagram/logo-instagram-4096.png' className='w-[400px]' alt='Phone' /> */}
                <div className='flex flex-row items-center'   >
                <Image  className=' hover:cursor-pointer py-10' width={500} src={instagram}/> 

                </div>
                <p className=' font-Inknut text-lg font-normal'>Get the opportunity to experience Next Generation SOS System at first. 200 users will be selected as a Beta Tester on a first come first serve basis. Testing will be done in 8 phases. Each phase’s duration will be 7 days and there will be 200 Testers.</p>
              
                <Button onClick={()=>window.open('https://www.instagram.com/dream_is_live_/')} marginTop={28} leftIcon={<FaInstagram  className='text-[#ed5067] text-4xl' />} className='bg-white border rounded-full text-black font-Inknut font-semibold text-xl w-64 p-8'>
                    Follow us 
                </Button>
            </div>
    </section>
  )
}
