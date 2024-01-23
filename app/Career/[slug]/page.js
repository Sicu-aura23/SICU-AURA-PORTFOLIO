'use client'

import Navbar2 from '@/app/Navbar2';
import { db } from '@/firebase/firebase.config'
import { Box, Button, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { 
    CiLocationOn,
    CiClock2,
 } from "react-icons/ci";

 import { 
    FaMoneyBill,
    FaDesktop,
    FaIndianRupeeSign,
 } from "react-icons/fa6";

 import { GiSkills } from "react-icons/gi";


export default function Page({params}){
    const jobId = params.slug;
    const [job, setJob] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [postedOn, setPostedOn] = useState('')
    useEffect(() => {
        setIsLoading(true)
        const fetchJob = async () => {
            const jobDoc = await getDoc(doc(db, 'JobList', jobId));
            if (jobDoc.exists()) {
                setJob(jobDoc.data());
                console.log(jobDoc.data())
                const jobData = jobDoc.data();
                console.log(jobData.posted_on.toDate().toDateString())
                setPostedOn(jobData.posted_on.toDate().toDateString())
            } else {
                console.log('No such document!');
            }
            setIsLoading(false)
        };

        fetchJob();
    }, [jobId])

    if(isLoading){
        return(
            <main className='bg-white w-screen h-screen flex flex-col items-center '>
                <Navbar2 />

                <section className='w-10/12 h-10/12 my-24'>
                    <Box padding='6' boxShadow='lg' bg='gray'>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Box>
                </section>

            </main>
        )
    }

    return(
        <main className='bg-white w-screen h-screen flex flex-col items-center '>
            <Navbar2 />
            <section className='w-10/12 h-11/12 overflow-y-scroll my-24 border rounded-lg text-black'>
                <div className='flex flex-col items-start justify-evenly mx-6 my-12'>
                    <h1 className=' font-Inknut font-bold text-2xl'>{job.title}</h1>
                    <div className='flex flex-row gap-4 my-2'>
                        <p className='text-xs text-gray-400 font-thin font-Inknut'>Job Id: {params.slug}</p>
                        <p className='text-xs text-gray-400 font-thin font-Inknut'>Job Posted on: {postedOn}</p>
                    </div>
                    <div className='flex flex-row flex-wrap gap-8 h-auto w-full my-8'>
                        <div className=' flex flex-row items-center justify-evenly gap-2 font-Inknut font-normal text-sm text-gray-700'><CiLocationOn/> {job.location}</div>
                        <div className=' flex flex-row items-center justify-evenly gap-2 font-Inknut font-normal text-sm text-gray-700'><FaMoneyBill /> {job.role}</div>
                        <div className=' flex flex-row items-center justify-evenly gap-2 font-Inknut font-normal text-sm text-gray-700'><FaDesktop /> {job.type}</div>
                        <div className=' flex flex-row items-center justify-evenly gap-2 font-Inknut font-normal text-sm text-gray-700'><CiClock2 /> {job.duration}</div>
                        <div className=' flex flex-row items-center justify-evenly gap-2 font-Inknut font-normal text-sm text-gray-700'><FaIndianRupeeSign/> {job.ispaid ?"Paid" : "Non-Paid"}</div>
                        <div className=' flex flex-row items-center justify-evenly gap-2 font-Inknut font-normal text-sm text-gray-700'><GiSkills/> {job.skills}</div>
                    </div>
                    <div className='my-12 gap-4 flex flex-col'>
                        <h1 className=' font-Inknut font-bold text-2xl'>Job Description</h1>
                        <ul className=' list-none'>
                            {job.description && job.description.map((point, index) => (
                                <li key={index} className='text-sm text-gray-700 font-Inknut font-normal my-4'>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h1 className=' font-Inknut font-bold text-xl'>Out Hiring Partner is Looking for:</h1>
                        <p className=' font-Inknut font-normal text-base'>{job.lookingfor}</p>
                    </div>                    
                </div>
            </section>
            <div className=' flex flex-row w-full justify-end px-6 py-6 font-Inknut'>
                <Link href={`/Career/${params.slug}/register`}>
                <button type="button"style={{backgroundColor:"#0C3D58",color:"white",padding:"5px 20px 5px 20px",border:" solid 1px #0C3D58",borderRadius:"3px"}}>Apply Now</button>
                </Link>
            </div>
        </main>
    )
}