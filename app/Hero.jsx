import React from 'react'
import Socials from './Socials'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <Navbar/>
    <Socials/>
    <main  className='flex flex-col h-[700px] justify-start pt-32  groupbg overflow-hidden home-bg md:h-[1000px] home'>    
        <section className=' md:flex md:flex-row md:w-screen md:ms-24 md:mb-24 home-section'>
        <div className=' ps-12 md:gap-8 md:flex md:flex-col md:w-[40%] md:justify-center home-content'>
            <p className=' text-3xl pb-10 md:font-normal md:text-5xl font-Inknut md:pb-0 md:space-x-3 md:space-y-2' style={{lineHeight:1.5}}>
                {`We're Here To Give Protection To You And Your Family`}
            </p>
            <p className='  md:font-medium md:text-md font-Inknut md:w-auto md:pe-20'>
            {`Building a secure future requires constant vigilance and innovation. We must take ahead of threats to protect ourselves and those we love.`}
            </p>
        </div>
        </section>  
    </main>
    </>
  )
}

export default Hero