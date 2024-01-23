'use client'
import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import Auth from './Auth';

import Navbar2 from "@/app/Navbar2";
import { auth } from '@/firebase/firebase.config';
import Register from './Register';



export default function Page(){
    const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem('user')));

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const sessionUser = JSON.parse(window.sessionStorage.getItem('user'));
          setUser(sessionUser);
        }
  
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            if (typeof window !== 'undefined') {
              window.sessionStorage.setItem('user', JSON.stringify(user));
            }
          } else {
            setUser(null);
            if (typeof window !== 'undefined') {
              window.sessionStorage.removeItem('user');
            }
          }
        });
    }, []);

    return(
        <main className='bg-white w-full h-full'>
            {user ? <Register /> : <Auth />}
        </main>
    )
}