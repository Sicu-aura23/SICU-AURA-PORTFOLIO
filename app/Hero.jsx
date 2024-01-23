import React from 'react'
import Socials from './Socials'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <Navbar/>
    <Socials/>
    <main  className='flex flex-col  justify-start pt-32  groupbg overflow-hidden home-bg' style={{height:"1000px"}}>    
        <section className='flex flex-row w-screen ms-24 mb-24'>
        <div className=' gap-8 flex flex-col w-[654px] justify-center'>
            <p className=' font-normal text-5xl font-Inknut  space-x-3 space-y-2' style={{lineHeight:1.5}}>
                {`We're Here To Give Protection To You And Your Family`}
            </p>
            <p className=' font-medium text-md font-Inknut w-auto pe-20'>
            {`Building a secure future requires constant vigilance and innovation. We must take ahead of threats to protect ourselves and those we love.`}
            </p>
        </div>
        </section>  
    </main>
    </>
  )
}

export default Hero