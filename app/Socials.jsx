'use client'
import React from 'react';
import facebook from '@/public/facebookicon.svg';
import twitter from '@/public/twittericon.svg';
import instagram from '@/public/instagramicon.svg';
import linkedin from '@/public/linkedinicon.svg';
import whatsapp from '@/public/whatsappicon.svg';
import Image from 'next/image';
const Socials = ({ top }) => {
    return (
        <div className={`flex flex-col items-center justify-around gap-6 top-${top} top-44 left-0 fixed z-10 `}>
            <Image className=' hover:cursor-pointer' onClick={()=>window.open('https://www.linkedin.com/company/sicu-aura/')}  src={linkedin} />
            <Image className=' hover:cursor-pointer' onClick={()=>window.open('https://www.facebook.com/profile.php?id=100092369332099&mibextid=LQQJ4d')} src={facebook} /> 
            <Image  src={whatsapp} onClick={()=>window.open('https://whatsapp.com/channel/0029Va90UM46RGJGdjSrNH3E')} className="text-2xl hover:cursor-pointer " />
            <Image  src={instagram} className=' hover:cursor-pointer' onClick={()=>window.open('https://instagram.com/sicu.aura')}  />
        </div>
    )
}

export default Socials;