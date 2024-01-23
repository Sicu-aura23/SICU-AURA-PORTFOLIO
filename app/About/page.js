'use client'

import Navbar from "../Navbar"
import Image from "next/image"
import Aboutus from "@/public/aboutus.png"
import Whoweare from '@/public/whoweare.png'


import Joinus from "@/public/Joinus.svg"
import Zerocrime from "@/public/zerocrime.svg"
import Nostress from "@/public/nostress.svg"
import Words from "@/public/words.svg"
import bird from "@/public/bird.svg"
import company from "@/public/company.svg"
import nature from "@/public/nature.svg"
import realestate from "@/public/realestate.svg"
import travel from "@/public/travel.svg"

import { Button } from "@chakra-ui/react"
import Socials from "../Socials"
import Footer from "../Footer"



export default function About() {
  return (
    <>
      <Navbar />
    <main className="flex flex-col w-full lg:w-screen h-auto justify-center items-center">
      <section className="flex flex-col md:flex-row justify-evenly items-center my-24">
        <div>
          <Socials top="50"/>
        </div>
        <div className="flex flex-col items-center text-white justify-center w-10/12 md:w-1/2 gap-12">
          <h1 className=" font-Inknut text-4xl font-semibold">
            ABOUT US
          </h1>
          <h3 className=" font-Inknut font-bold text-xl text-justify">
              {`Sicu-Aura: Weaving Safety and Simplicity into the Fabric of Life`}
          </h3>
          <p className=" font-Inknut font-light text-sm ">
          {`Who we are is not defined by lines of code or circuits, but by the beating hearts we strive to protect. We are Sicu-Aura, a revolutionary startup with a mission that burns bright: to build a world where safety and ease dance hand-in-hand, making every human life a symphony of安心 (anshin), the Japanese concept of unwavering peace of mind.`}
          <br/><br/>
          {`We believe that everyone deserves to live a life unburdened by fear. That's why we're dedicated to building a safer world through innovative safety technologies. `}
          <br/><br/>
          {`We envision a future where these technologies are so intuitive and integrated into our lives that they become invisible, acting as a silent guardian, preventing harm before it even occurs.`}
          </p>
        </div>
        <Image width='500' height='440' src={Aboutus} alt='about us img' className="hidden md:block w-64 md:w-80 lg:w-96 h-auto"/>
      </section>
      <section className="flex flex-row-reverse justify-evenly items-center my-24">
        <div className="flex flex-col items-center text-white justify-center w-10/12 md:w-1/3 gap-12">
          <h3 className=" font-Inknut font-bold text-xl text-justify">
            {`This is the world Sicu-Aura is building. We are the architects of a future where:`}
          </h3>
          <ul className=" font-Inknut font-normal text-sm list-disc space-y-6">
            <li>{`Innovation is not just a buzzword, but a lifeline. Our鋭い (surudoi) minds, sharpened by cutting-edge technology, craft solutions that are as intuitive as they are ingenious. `}</li>
            <li>{`Human-centricity is not just a philosophy, but a compass. We navigate the labyrinth of challenges with empathy as our guide, ensuring every invention serves humanity with grace and compassion. `}</li>
            <li>{`Collaboration is not just a strategy, but a symphony. We believe that the most beautiful melodies are composed in harmony, uniting diverse talents and perspectives to create a masterpiece of安心. `}</li>            
          </ul>
        </div>
        <Image width='500' height='440' src={Whoweare} alt='Who we are img' className="hidden md:block w-64 md:w-80 lg:w-96 h-auto" />
      </section>

      <section className="flex flex-col justify-evenly items-center my-24">
        <h1 className=" font-Inknut font-semibold text-4xl mb-5">
          Our Mission
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24 mx-24 my-12">
          <div className="aboutGradient flex flex-col justify-center items-center p-6 lg:p-12 gap-8">
            <Image width='150' height='150' className="lg:w-[150px] lg:h-[150px] md:h-[100px] md:w-[100px] h-[75px] w-[75px]" src={Zerocrime} alt="zero crime"/>
            <p className=" font-Inknut text-white font-semibold text-lg md:text-center lg:text-justify">World of Zero Crime</p>
          </div>
          <div className="aboutGradient flex flex-col justify-center items-center p-6 lg:p-12 gap-8">
            <Image width='150' height='150' className="lg:w-[150px] lg:h-[150px] md:h-[100px] md:w-[100px] h-[75px] w-[75px]" src={Words} alt="zero crime"/>
            <p className=" font-Inknut text-white font-semibold text-lg md:text-center lg:text-justify">Unwanted Interactions</p>
          </div>
          <div className="aboutGradient flex flex-col justify-center items-center p-6 lg:p-12 gap-8">
            <Image width='150' height='150' className="lg:w-[220px] lg:h-[150px] md:h-[100px] md:w-[100px] h-[75px] w-[75px]" src={Nostress} alt="zero crime"/>
            <p className=" font-Inknut text-white font-semibold text-lg md:text-center lg:text-justify">Stress Free</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-evenly items-center my-10 ">
        <h1 className=" font-Inknut font-semibold text-4xl mx-2">
          Do you want to join us?
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-24 mx-24 my-16 w-8/12 items-center font-Inknut">
          <div>
            <p className="leading-10">
            Work alongside some of the brightest minds in the industry. Sicu-Aura fosters a culture of mentorship and collaboration, so you'll always be learning and growing.
            </p>
            <Button className="bg-[#0DF5E3] text-black text-sm font-normal hover:bg-[#E8246F] mt-10 px-10" borderRadius='full'>Enroll Now</Button>
          </div>
          <Image src={Joinus} alt='Join us' />
        </div>
      </section>
      <section className="flex flex-col justify-evenly items-center my-40 gap-8">
        <h1 className=" font-Inknut font-semibold text-4xl ">
          Our Investors
        </h1>
        <p className="font-Inknut">
        Our valuable Board of Directors, and integrated part of building Sicu-aura
        </p>
        <p className="font-Inknut py-10">
       To be disclosed Soon...
        </p>
        {/* <div className="grid grid-cols-2 md:flex lg:flex-row gap-24 mx-4 md:mx-16 lg:mx-24 my-12 w-10/12 md:w-8/12 items-center justify-center">
          <Image src={travel} alt='Join us' />
          <Image src={bird} alt='Join us' />
          <Image src={company} alt='Join us' />
          <Image src={realestate} alt='Join us' />
          <Image src={nature} alt='Join us' />
        </div> */}
      </section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.014985502432!2d77.60408691110524!3d13.034717587233473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a01718c837%3A0x1778df482a692dc9!2s68%2C%202nd%20Cross%20Rd%2C%20Kanaka%20Nagar%2C%20Hebbal%2C%20Bengaluru%2C%20Karnataka%20560032!5e0!3m2!1sen!2sin!4v1702314229090!5m2!1sen!2sin" className="w-screen md:w-full h-96 md:pr-4 my-6" loading="lazy" ></iframe>
      {/* <section className="grid grid-cols-2 gap-12 md:flex flex-row h-auto w-10/12 md:w-11/12 justify-evenly items-start my-12 ">
        <div className="flex flex-col gap-2 font-Inknut w-48 h-auto">
          <p className=" font-semibold text-base">Address:</p>
          <p className=" font-medium text-sm">#68. 2nd Cross, Muniramappa layout,Geddalahalli, Bengaluru, KA 560094.</p>
        </div>
        <div className="flex flex-col gap-2 font-Inknut w-48 h-auto ">
          <p className=" font-semibold text-base">Email</p>
          <p className=" font-medium text-sm">sicu.aura.official@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 font-Inknut w-48 h-auto ">
          <p className=" font-semibold text-base">Contact Number</p>
          <p className=" font-medium text-sm">+91-9876543210 / 2435-9876</p>
        </div>
        <Button className=" bg-teal-600 hover:bg-teal-900 transition-all text-black rounded-2xl" onClick={() => window.open('https://www.youtube.com')}>Get Directions</Button>
      </section> */}
      <Footer />
    </main>
    </>
  )
}