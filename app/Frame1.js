import React from 'react'
import Image from 'next/image'
import Phone from '@/public/Phone1.svg'
import { Button } from '@chakra-ui/react'

export default function Frame1 () {
  return (
    <section className='flex justify-center md:flex-row flex-wrap my-12 h-[700px] '>
            <div className='hidden md:block md:flex-1 md:mt-[5%] frame1 '>
                <Image src={Phone} className='w-[80%] ' alt='Phone' />
            </div>
            {/* <Image src={Phone} className='w-[80%] md:w-0  fb-img' alt='Phone' /> */}
            <div className=' mx-10 md:flex-1 flex flex-col justify-evenly min-h-fit md:mx-12 md:w-1/2  md:p-12 items-center'>
                <p className=' font-Inknut font-semibold md:text-4xl md:mt-[5%]' style={{lineHeight:1.8,wordSpacing:"20px"}}>
                  It's The Time For Testing. Join Us as a <h1  style={{wordSpacing:"5px"}}>Beta Tester NOW</h1>
                </p>
                <p className=' text-sm font-normal font-Inknut md:text-lg md:mt-[10%]'>{`Get the opportunity to experience Next Generation SOS System at first. 200 users will be selected as a Beta Tester on a first come first serve basis. Testing will be done in 8 phases. Each phase's duration will be 7 days and there will be 200 Testers.`}</p>
                <Button className=' text-xs p-3 mt-52 bg-white border rounded-full text-black font-Inknut font-semibold md:text-xl w-64 md:p-8 md:mt-[25%]'>
                   Coming Soon
                </Button>
            </div>
    </section>
  )
}
