'use client'
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase.config';
import { Spinner } from '@chakra-ui/react';
import Navbar from '@/app/Navbar';
import Image from 'next/image';
import Footer2 from '@/app/Footer2';

export default function Page({ params }) { // Changed 'page' to 'Page'

    const [post, setPost] = useState(null);
    const postId = params.slug;

    useEffect(() => {
        const fetchPost = async () => {
        const postDoc = await getDoc(doc(db, 'blogPosts', postId));
        if (postDoc.exists()) {
            console.log('Document data:', postDoc.data());
            setPost(postDoc.data());
        } else {
            console.log('No such document!');
        }
        };

        fetchPost();
    }, [postId]);

    if (!post) {
        return <Spinner size='xl' className='absolute left-[50%] top-[10rem]' />;
    }

    return (
        <main className='w-screen min-h-screen flex flex-col items-center justify-between'>
            <Navbar />
            {/* <img src={post.imageUrl} loading='eager'  className="max-w-screen min-w-[500] object-cover" /> */}
            <section className='flex flex-col gap-4 my-12 mx-20'>
                <div className='flex flex-row gap-6 my-12 flex-wrap items-center justify-center'>
                    <h2 className='font-Inknut text-lg  text-center font-medium'>
                        {post.tagline}
                    </h2>
                    <h3 className='font-Inknut text-lg text-gray-300 text-center font-medium'>
                        ~{post.author}   
                    </h3>
                </div>
                <h1 className=' font-Inknut text-4xl font-medium border-b border-gray-400 p-2 my-12'>
                    {post.title}
                </h1>
                <p>
                    {post.content}
                </p>
            </section>
            <Footer2 />
        </main>
    );
  }