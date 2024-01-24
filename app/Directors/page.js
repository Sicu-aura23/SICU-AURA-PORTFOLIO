'use client'
import Image from "next/image"
import Navbar from "../Navbar"
import Rishav from "@/public/Rishav.svg"
import Filler from "@/public/Filler.png"
import Rtitle from "@/public/Rishav_Title.svg"
import Atitle from "@/public/Group677.png"

import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import Socials from "../Socials"
import Footer from "../Footer"

export default function Directors() {
  return (
    <>
      <Navbar />  
      <section className="w-screen my-12 flex flex-col justify-center items-start font-Inknut text-4xl text-whitefont-medium directors">
      <div className="z-30">
        <Socials top="40"/>
      </div>
        <p className=" text-2xl md:text-4xl bg-black bg-opacity-30 h-[50rem] z-20 p-4 pt-[28rem] text-center justify-center flex flex-row w-full shadow-xl rounded-sm">Board of Directors</p>
      </section>
      <section className=" flex flex-row my-40 mx-20 flex-wrap justify-evenly items-center">
        <div className="flex flex-col justify-evenly items-center gap-4">
          <Image src={Rishav} alt="directors" />
          <Image className="w-[233px]" src={Rtitle} alt="Title" />
          <h1 className=" md:me-[20%]  font-Inknut font-medium text-base">Founder and CEO</h1>
          <p className="md:me-[45%] font-Inknut font-medium text-sm">-Sicu-aura</p>
          <div className="flex justify-center md:flex-row gap-6 w-48 mt-5 md:me-5 my-[10%]">
              <FaFacebook className=' hover:cursor-pointer' onClick={()=>window.open('https://www.facebook.com/Rishav.ghosh.714?mibextid=tPfjzR')} size={24}/>
              <FaLinkedin  className=' hover:cursor-pointer' onClick={()=>window.open('https://www.linkedin.com/in/rishav-ghosh-sicu-aura')} size={24}/>
              <FaInstagram   className=' hover:cursor-pointer' onClick={()=>window.open('https://www.instagram.com/dream_is_live_')}  size={24}/>
              <FaTwitter className=' hover:cursor-pointer' size={24}/>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center gap-4">
          <Image src={Filler} alt="directors" />
          <Image src={Atitle} alt="Title" />
          <h1 className=" md:me-[25%] font-Inknut font-medium text-base">Released Soon</h1>
          <p className="  md:me-[40%] font-Inknut font-medium text-sm">-Sicu-aura</p>
          <div className="flex justify-center md:flex-row gap-6 w-48 mt-5 md:me-5 my-[10%]">
              <FaFacebook size={24}/>
              <FaLinkedin size={24}/>
              <FaInstagram size={24}/>
              <FaTwitter size={24}/>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center gap-4">
          <Image src={Filler} alt="directors" />
          <Image src={Atitle} alt="Title" />
          <h1 className="  md:me-[25%] font-Inknut font-medium text-base">Released Soon</h1>
          <p className=" md:me-[40%] font-Inknut font-medium text-sm">-Sicu-aura</p>
          <div className="flex justify-center md:flex-row gap-6 w-48 mt-5 md:me-5 my-[10%]">
              <FaFacebook size={24}/>
              <FaLinkedin size={24}/>
              <FaInstagram size={24}/>
              <FaTwitter size={24}/>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center gap-4">
          <Image src={Filler} alt="directors" />
          <Image src={Atitle} alt="Title" />
          
          <h1 className=" md:me-[25%] font-Inknut font-medium ">Released Soon</h1>
          <p className=" md:me-[40%] font-Inknut font-medium text-sm">-Sicu-aura</p>
         
          <div className="flex justify-center md:flex-row gap-6 w-48 mt-5 md:me-5 my-[10%]">
              <FaFacebook size={24}/>
              <FaLinkedin size={24}/>
              <FaInstagram size={24}/>
              <FaTwitter size={24}/>
          </div>
        </div>
      </section>
      <Footer />
    </>
    
  )
}
