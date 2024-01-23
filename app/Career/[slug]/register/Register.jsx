'use client'
import Navbar2 from '@/app/Navbar2';
import { auth } from '@/firebase/firebase.config';
import { signOut } from 'firebase/auth';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

import {
  Box,
  Button,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  // FormControl,
  // FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  // Input,
  // Checkbox, 
  // CheckboxGroup ,
  // Select ,
  // Textarea ,

} from '@chakra-ui/react'
import Regform from './Regform';


const steps = [
  { title: 'Profile' },
  { title: 'Work Authorization' },
  { title: 'Additional Information' },
]



const Register = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const sessionUser = JSON.parse(window.sessionStorage.getItem('user'));
          setUser(sessionUser);
        }
      }, []);

      const signOutUser = () => {
        signOut(auth)
          .then(() => {
            setUser(null);
            if (typeof window !== 'undefined') {
              window.sessionStorage.removeItem('user');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };

      const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
      })

  return (
    <main className=' text-black w-screen h-screen flex flex-col items-center'>
        <Navbar2 />
          {!user && (
            <div>
              <p>Please sign in to view this page</p>
            </div>
          )}
          {user && (
            // <div>
            //       <Image src={user.photoURL} width='100' height='100' className='rounded-full' alt="user photo"/>
            //   <h2>{user.displayName}</h2>
            //   <p>{user.email}</p>
            //   </div>
            <Stepper index={activeStep} colorScheme='blackAlpha' className='w-full my-4 px-12 md:px-16 lg:px-24'>
              {steps.map((step, index) => (
                <Step key={index} onClick={() => setActiveStep(index)} className=' hover:cursor-pointer'>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                      
                    />
                  </StepIndicator>

                  <Box flexShrink='0'>
                    <StepTitle>{step.title}</StepTitle>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          )}
        
          <Regform activeStep={activeStep} user={user} setActiveStep={setActiveStep}/>
      <Button disabled={!user} colorScheme='teal' variant='outline' onClick={signOutUser} className=' my-4'>Sign out</Button>
    </main>
  )
}

export default Register