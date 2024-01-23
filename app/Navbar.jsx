'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Logo.svg'
import Link from 'next/link'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  Button,
  Stack,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const pathname = usePathname()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isDrawer = useBreakpointValue({ base: true, md: false });
    const Links = () => (
      <div className='flex items-center gap-8 mx-32 font-Inknut'>
                <div className={` ${pathname === '/' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                <Link href='/' className={` ${pathname === '/' ? 'item-div-on ' : 'item-div '}`}>Home</Link>
                  <span  className={` ${pathname === '/' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
              </div>
              <div className={` ${pathname === '/Directors' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                  <Link href='/Directors' className={` ${pathname === '/Directors' ? 'item-div-on ' : 'item-div '}`}>Directors</Link>
                <span  className={` ${pathname === '/Directors' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
             </div>
               <div className={` ${pathname === '/Statistics' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                <Link href='/Statistics' className={` ${pathname === '/Statistics' ? 'item-div-on ' : 'item-div '}`}>Statistics</Link>
                <span  className={` ${pathname === '/Statistics' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
              </div>
               <div className={` ${pathname === '/Blog' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                  <Link href='/Blog' className={` ${pathname === '/Blog' ? 'item-div-on ' : 'item-div '}`}>Blog</Link>
                <span  className={` ${pathname === '/Blog' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
              </div>
                <div className={` ${pathname === '/Career' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                 <Link href='/Career' className={` ${pathname === '/Career' ? 'item-div-on ' : 'item-div '}`}>Career</Link>
                 <span  className={` ${pathname === '/Career' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
              </div>
              <div className={` ${pathname === '/About' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                <Link href='/About' className={` ${pathname === '/About' ? 'item-div-on ' : 'item-div '}`}>About Us</Link>
                  <span  className={` ${pathname === '/About' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
               </div>
            </div>
    )
  return (
    <header className='md:text-white w-screen h-fit flex-row flex justify-around mt-2 md:mx-6 gap-32 lg:gap-56  items-center '>
        <Link href='/'>
          <Image src={Logo} alt="phone" className="w-auto h-auto" width='160' height='60' />
        </Link>
        {isDrawer ? (
        <>
          <Button colorScheme='teal' variant='solid' className='text-white' onClick={onOpen}><GiHamburgerMenu/></Button>
          <Drawer colorScheme='blackAlpha' isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader bgColor='#0F182B'><Image src={Logo} alt="phone" className="w-auto h-auto" width='160' height='60' /></DrawerHeader>
                <DrawerBody bgColor='#0F182B'>
                <Stack className='flex items-center gap-12 font-Inknut'>
                <div className={` ${pathname === '/' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                <Link href='/' className={` ${pathname === '/' ? 'item-div-on ' : 'item-div '}`}>Home</Link>
                  <span  className={` ${pathname === '/' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
              </div>
              <div className={` ${pathname === '/Directors' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                  <Link href='/Directors' className={` ${pathname === '/Directors' ? 'item-div-on ' : 'item-div '}`}>Directors</Link>
                <span  className={` ${pathname === '/Directors' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
             </div>
               <div className={` ${pathname === '/Statistics' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                <Link href='/Statistics' className={` ${pathname === '/Statistics' ? 'item-div-on ' : 'item-div '}`}>Statistics</Link>
                <span  className={` ${pathname === '/Statistics' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
              </div>
               <div className={` ${pathname === '/Blog' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                  <Link href='/Blog' className={` ${pathname === '/Blog' ? 'item-div-on ' : 'item-div '}`}>Blog</Link>
                <span  className={` ${pathname === '/Blog' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
              </div>
                <div className={` ${pathname === '/Career' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                 <Link href='/Career' className={` ${pathname === '/Career' ? 'item-div-on ' : 'item-div '}`}>Career</Link>
                 <span  className={` ${pathname === '/Career' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
              </div>
              <div className={` ${pathname === '/About' ? 'flex flex-col items-center item-div-on ' : ' flex flex-col items-center item-div '}`}>
                <Link href='/About' className={` ${pathname === '/About' ? 'item-div-on ' : 'item-div '}`}>About Us</Link>
                  <span  className={` ${pathname === '/About' ? ' relative top-1 hover-bar bar-cli item-div' : 'relative top-1 hover-bar'}`} ></span>
               </div>
            </Stack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <Links />
      )}
    </header>
    
    

    
  )
}

export default Navbar