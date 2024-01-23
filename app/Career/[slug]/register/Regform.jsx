'use client'
import React, { useEffect, useState } from 'react'

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox, 
  Select ,
  Textarea, 
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { useRouter } from 'next/navigation'


const Regform = ({activeStep, user, setActiveStep}) => {

  const router = useRouter();
  const [isloading , setIsLoading] = useState(false)
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      console.log('savedData', savedData);
      return JSON.parse(savedData);

    } else {
      return {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        highestDegree: '',
        stream: '',
        institution: '',
        cgpa: '',
        passingYear: '',
        yearGap: '',
        photo: undefined,
        resume: undefined,
        authorized: false,
        experience: 0,
        sponsorship: false,
        willing: false,
        join: '',
        about: '',
        strengths: '',
        future: '',
        conflict: '',
        whyBestFit: '',
        linkedIn: '',
        additionalLink: '',
      };
    }
  });

  useEffect(() => {
    const savedData = localStorage.getItem(`formData${activeStep}`);
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [activeStep]);
    

  const handleInputChange = (event) => {
    const { name, type, files } = event.target;
    if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0],
        [`${name}Url`]: files[0] ? URL.createObjectURL(files[0]) : prevState[`${name}Url`],  
      }));
      console.log('files', files[0]);
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: event.target.value,
      }));
    }
  };

  const handleNext = () => {
    setIsLoading(true);
    localStorage.setItem(`formData${activeStep}`, JSON.stringify(formData));
    setIsLoading(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(`formData${activeStep}`, JSON.stringify(formData));
    
    router.push(`/Career/3bKAYuaccKaJXKnP1rQv/register/preview`);
  };

  const resize = 'none'

  return (      
    <form className=' w-full h-full md:w-10/12 md:h-11/12 md:my-6 flex flex-col overflow-y-scroll' onSubmit={handleSubmit}>
      {user && activeStep === 0 && (
        <section className='w-full h-full my-6 flex flex-col gap-4 px-2'>
          <h1 className=' font-Inknut font-medium text-xl'>
            Profile Information
          </h1>
          <p className=' font-Inknut font-light text-xs text-zinc-400'>
            {`Be attentive while putting details. Once you've submitted your details you can't edit any more. Input carefully !`}
          </p>
          <div className='flex flex-row my-2 gap-8 font-Inknut'>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input name='firstName' placeholder='Enter First name' type='text'  onChange={handleInputChange} />
            </FormControl>
            <FormControl >
              <FormLabel>Middle name</FormLabel>
              <Input name='middleName' placeholder='Enter Middle name' type='text'  onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input name='lastName' placeholder='Enter Last name' type='text'  onChange={handleInputChange} />
            </FormControl>
          </div>
        </section>
      )}
      {user && activeStep === 0 && (
        <section className='w-full h-full my-6 flex flex-col gap-4 px-2'>
          <h1 className=' font-Inknut font-medium text-xl'>
            Contact Details
          </h1>
          <p className=' font-Inknut font-light text-xs text-zinc-400'>
            {`We care about your privacy. All of the details are private to us .`}
          </p>
          <div className='flex flex-row my-2 gap-8 font-Inknut'>
            <FormControl isRequired>
              <FormLabel>Email Id</FormLabel>
              <Input name='email' placeholder='Enter Email id' type='email'  onChange={handleInputChange}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input name='phone' placeholder='Enter Phone number' type='number'  onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input name='address' placeholder='Enter Address' type='text'  onChange={handleInputChange}/>
            </FormControl>
          </div>
        </section>
      )}
      {user && activeStep === 0 && (
        <section className='w-full h-full my-6 flex flex-col gap-4 px-2'>
          <h1 className=' font-Inknut font-medium text-xl'>
            Most Recent Experience And Education
          </h1>
          <p className=' font-Inknut font-light text-xs text-zinc-400'>
            {`This job is for candidates who are currently studying or have graduated in the past one year, so please ensure your latest education information is shown below.`}
          </p>
          <div className='grid grid-cols-2 my-2 lg:grid-cols-3 gap-8 font-Inknut'>
            <FormControl isRequired>
              <FormLabel>Highest Degree / Course Name</FormLabel>
              <Input name='highestDegree' placeholder='Mention Highest Degree of education' type='text'  onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Stream Name</FormLabel>
              <Input name='stream' placeholder='Mention the stream name' type='text'  onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Institution Name</FormLabel>
              <Input name='institution' placeholder='School / College / University' type='text'  onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Current CGPA</FormLabel>
              <Input name='cgpa' placeholder='Mention Overall CGPA' type='text'  onChange={handleInputChange}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Passing Year</FormLabel>
              <Input name='passingYear' placeholder='Mention Year of Passing' type='text'  onChange={handleInputChange}/>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>{`Year Gap (if Any) `}</FormLabel>
              <Input name='yearGap' placeholder='Mention if any year gap' type='text'  onChange={handleInputChange}/>
            </FormControl>
          </div>
        </section>
      )}
      {user && activeStep === 0 && (
        <section className='w-full h-full my-6 flex flex-row gap-4 px-2'>
          <h1 className=' font-Inknut w-full font-medium text-xl'>
            Upload Your Photo
          </h1>
          <FormControl isRequired>
              <FormLabel>{`Photo (JPEG/JPG/PNG)`}</FormLabel>
              <Input name='photo' type='file' colorScheme='teal' variant='filled' accept='.jpeg, .jpg, .png'  onChange={handleInputChange} />
          </FormControl>
        </section>
      
      )}
      {user && activeStep === 0 && (
        <section className='w-full h-full my-6 flex flex-row gap-4 px-2'>
          <h1 className=' font-Inknut w-full font-medium text-xl'>
            Upload Your Resume
          </h1>
          <FormControl isRequired>
              <FormLabel>{`Resume (PDF)`}</FormLabel>
              <Input name='resume' type='file' colorScheme='teal' variant='filled' accept='.pdf'  onChange={handleInputChange} />            
          </FormControl>
        </section>
      
      )}
      {user && activeStep === 0 && (
        <section className='w-full h-full my-8 flex flex-col gap-4 font-Inika text-gray-400 font-normal text-sm'>
          <FormControl isRequired>
            <Checkbox colorScheme='teal'>{`As a part of the online application process, you will be asked whether you possess certain minimum required qualifications for the role to which you are applying. By check this box you agree that you will answer these questions accurately. You further acknowledge that your answers may result in your application not being considered further this role if you do not currently meet the required qualifications for the role.`}</Checkbox>
          </FormControl>
          <FormControl isRequired>
            <Checkbox colorScheme='teal'>{`I agree to terms and conditions`}</Checkbox>
          </FormControl>
        </section>
      )}
      {user && activeStep === 1 && (
        <section className='w-full h-full my-6 flex flex-col gap-4 px-2'>
        <h1 className=' font-Inknut font-medium text-xl'>
          Work Authorization
        </h1>
        <p className=' font-Inknut font-light text-xs text-zinc-400'>
          {`Please provide all the information requested. Answering these questions will not any way disqualify you from a role at Sicu-aura.`}
        </p>
        <div className='flex flex-col my-2 gap-8 '>
          <FormControl isRequired className='flex gap-4'>
            <FormLabel className='w-full'>{`Are you authorized to work in India?`}</FormLabel>
            <Select name='authorized' placeholder='Select option' colorScheme='teal' variant='filled'  className='w-32'  onChange={handleInputChange}>
              <option value={true} >Yes</option>
              <option value={false}>No</option>
            </Select>
          </FormControl>
          <FormControl isRequired className=' flex gap-4 md:gap-8'>
            <FormLabel>{`How many years of experience do you have?`}</FormLabel>
            <NumberInput name='experience' step={1} defaultValue={1} min={0} max={30}>
              <NumberInputField />
              <NumberInputStepper >
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl className=' flex gap-4'>
            <FormLabel className=' w-fit '>{`In order to obtain or maintain employment eligibility, will you now or in the future require the company's sponsorship for an immigration-related employment benefit (ie, a work visa work permit, etc) ?`}</FormLabel>
            <Select name='sponsorship' placeholder='Select option' colorScheme='teal' variant='filled' size='sm' className='w-32'  onChange={handleInputChange}>
              <option value={true} >Yes</option>
              <option value={false}>No</option>
            </Select>
          </FormControl>
        </div>
      </section>
      )}
      {user && activeStep === 2 && (
        <section className='w-full h-full my-6 flex flex-col gap-4 px-2'>
          <h1 className=' font-Inknut font-medium text-xl'>
            Additional Information
          </h1>
          <p className=' font-Inknut font-light text-xs text-zinc-400'>
            {`Please submit addition information carefully for the better evaluation of your profile.`}
          </p>
          <div className='flex flex-row gap-6'>
            <FormControl isRequired className='flex gap-4'>
              <FormLabel className='w-full'>{`Are you willing to join this non-paid internship ?`}</FormLabel>
              <Select name='willing' placeholder='Select option' colorScheme='teal' variant='filled' size='sm' className='w-32'  onChange={handleInputChange} >
                <option value={true} >Yes</option>
                <option value={false}>No</option>
              </Select>
            </FormControl>
            <FormControl isRequired className='flex gap-2'>
              <FormLabel className='w-full'>{`After how many days you can join ?`}</FormLabel>
              <NumberInput name='join' step={1} defaultValue={1} min={0} max={30}  >
                <NumberInputField onChange={handleInputChange}/>
              </NumberInput>
            </FormControl>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>              
            <FormControl isRequired >
              <FormLabel className='w-full'>{`Tell me about yourself`}</FormLabel>
              <Textarea
                placeholder='Tell me about yourself'
                size='sm'
                resize={resize}
                name='about'
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired >
              <FormLabel className='w-full'>{`What are your strengths and weaknesses`}</FormLabel>
              <Textarea
                placeholder='what are your strengths and weaknesses'
                size='sm'
                resize={resize}
                name='strengths'
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired >
              <FormLabel className='w-full'>{`Where do you see yourself in 5 years`}</FormLabel>
              <Textarea
                placeholder='Where do you see yourself in 5 years'
                size='sm'
                resize={resize}
                name='future'
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired >
              <FormLabel className='w-full'>{`How do you handle conflict?`}</FormLabel>
              <Textarea
                placeholder='How do you handle conflict?'
                size='sm'
                resize={resize}
                name='conflict'
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired >
              <FormLabel className='w-full'>{`Why do you think that yourself as a best fit for this role ?`}</FormLabel>
              <Textarea
                placeholder='Why do you think that yourself as a best fit for this role ?'
                size='sm'
                resize={resize}
                name='whyBestFit'
                onChange={handleInputChange}
              />
            </FormControl>
          </div>
          <div className=' flex flex-col gap-6'>
            <FormControl isRequired>
              <FormLabel>{`Linkedin`}</FormLabel>
              <Input name='linkedIn' placeholder='Provide URL' type='text'  onChange={handleInputChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>{`Additional Link`}</FormLabel>
              <Input name='additionalLink' placeholder='Add other links (i.e. Personal Live Project / Portfolio / GitHub / Cover Letter etc.)' type='text'  onChange={handleInputChange}/>
            </FormControl>
          </div>
          <Button type='submit' colorScheme='teal' variant='outline' className='self-end mx-4 my-6 w-fit px-8 py-4'>Preview</Button>
        </section>
      )}
      {user && activeStep <= 1 && (
        <Button  colorScheme='teal' variant='outline' className=' self-end mx-4 my-4 w-fit px-8 py-4' disabled={isloading} onClick={handleNext}>Next</Button>
      )}

    </form>
        
  )
}

export default Regform