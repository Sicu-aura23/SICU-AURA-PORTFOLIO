import { auth, provider } from "@/firebase/firebase.config";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Authbg from "@/public/authbg.svg";
import Image from "next/image";
import glogo from '../../../../public/google-logo.png'
import {
  Button,
  FormHelperText,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  const [user, setUser] = useState(null);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        window.sessionStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        window.sessionStorage.setItem("user", JSON.stringify(user));
      } else {
        setUser(null);
        window.sessionStorage.removeItem("user");
      }
    });
  }, []);

  return (
    <main className="text-black w-screen h-screen relative ">
      <Image
        src={Authbg}
        w="1000"
        h="1000"
        className=" object-cover"
        fill={true}
        alt="bg"
      />
      {/* <section className="z-10 absolute left-">
        <div className=" flex flex-row rounded-md ">
          <div className=" flex flex-col bg-white p-5 ">
            <FormControl>
              <FormLabel>USER ID</FormLabel>
              <Input placeholder='Enter your email id' type="email" />
              <FormLabel>CREATE PASSWORD</FormLabel>
              <Input placeholder='Put minimum 8-digit password' type="password" />
              <FormLabel>CONFIRM PASSWORD</FormLabel>
              <Input placeholder='Re-enter the password' type="password" />
            </FormControl>
            <Button
              colorScheme="teal"
              variant="solid"
              rightIcon={<FaGoogle />}
              className="w-fit p-2 text-black"
              onClick={signIn}
            >
              Sign in with Google
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              rightIcon={<FaGoogle />}
              className="w-fit p-2 text-black"
              onClick={signIn}
            >
              Sign in with Google
            </Button>
          </div>
          <div className=" flex flex-col bg-[#FFE4C4] p-24 border-r w-[]">
            <p>Email auth</p>
          </div>
        </div>
      </section> */}
      <div class=" absolute h-screen  font-Inknut w-full flex justify-center items-center">
    <div class="w-30 h-30">
    <div className=" flex flex-row rounded-md ">
          <div className=" flex flex-col bg-white p-5 w-[20rem] h-[22rem]">
            <h1 className="text-xl m-1 " style={{fontWeight:"bold"}} >SIGN-UP</h1>
            <FormControl className="p-2" >
            <FormLabel  style={{color:"#606060",fontSize:"x-small"}}>USER ID</FormLabel>
              <Input style={{fontSize:"xx-small"}} className="p-2 mb-5" size="xs" placeholder='Enter your email id' type="email" />
              <FormLabel style={{color:"#606060",fontSize:"x-small"}}>CREATE PASSWORD</FormLabel>
           
              <Input style={{fontSize:"xx-small"}} className="p-2 mb-5" size="xs" placeholder='Put minimum 8-digit password' type="password" />
              <FormLabel style={{color:"#606060",fontSize:"x-small"}} className="text-xs">CONFIRM PASSWORD</FormLabel>
            
              <Input  style={{fontSize:"xx-small"}} className="p-2 " size="xs" placeholder='Re-enter the password' type="password" />
            </FormControl>
            <div className="mt-8 flex flex-row justify-between items-center">
            <span className=" flex flex-row items-center "
              rightIcon={<FaGoogle />}
              onClick={signIn}
              style={{fontSize:"x-small",cursor:"pointer"}}
            >
              Sign in with
                <Image className="ms-2" src={glogo}></Image>
            </span>
            <button
              style={{backgroundColor:"#0C3D58",color:"white",padding:"6px 25px 6px 25px",borderRadius:"2px",fontSize:"x-small"}}
             
              
            >
              Sign in
            </button>

            </div>
          </div>
          <div className=" flex flex-col bg-[#FFE4C4] p-5 border-r w-[16rem] h-[22rem] ">
          <h1 className="text-xl m-1" style={{fontWeight:"bold"}} >LOGIN</h1>
          <FormControl className="p-2 flex flex-col">
            <FormLabel style={{color:"#606060",fontSize:"x-small"}}>USER ID</FormLabel>
              <Input style={{border:"solid 1px gray",fontSize:"xx-small"}} color="black" className="p-2 mb-5" size="xs" placeholder='Enter your email id' type="email" />
              <FormLabel style={{color:"#606060",fontSize:"x-small"}}>PASSWORD</FormLabel>          
              <Input style={{border:"solid 1px gray",fontSize:"xx-small"}}  className="p-2 mb-1" size="xs" placeholder='Put your password here' type="password" />
              <span style={{color:"GrayText",fontSize:"x-small"}} className="text-xs text-right">Forgot password?</span>
            </FormControl>
            <div className="mt-20 text-right">
            <button
              style={{backgroundColor:"#0C3D58",color:"white",padding:"6px 25px 6px 25px",borderRadius:"2px",fontSize:"x-small"}}
                     
            >
              Login
            </button>

            </div>
          </div>
        </div>
    </div>
</div>
    </main>
  );
};

export default Auth;
