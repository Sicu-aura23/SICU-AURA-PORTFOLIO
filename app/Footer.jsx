"use client";
import React, { useState } from "react";
import {
  List,
  ListItem,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  UnorderedList,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import facebook from "@/public/facebookicon.svg";
import twitter from "@/public/twittericon.svg";
import instagram from "@/public/instagramicon.svg";
import linkedin from "@/public/linkedinicon.svg";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import whatsapp from "@/public/whatsappicon.svg";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(email);
  };

  return (
    <footer className=" bg-white w-screen h-fit flex-col flex text-black font-Kadwa mt-20">
      <section className="flex-row md:flex md:flex-wrap md: justify-around grid grid-cols-2 mt-2 px-5  py-6 gap-6">
        <div className=" w-auto gap-6 flex flex-col">
          <div className="font-semibold md:first-letter:font-bold md:font-semibold md:block md:text-xl ">
            | KNOW US
          </div>
          <List
            className=" text-sm md:text-base "
            spacing={3}
            marginBottom={10}
            marginLeft={-2}
            marginTop={-4}
          >
            <ListItem>
              <Link
                href="/"
                className="flex flex-row items-center  border-b-2 p-2 text-gray-500"
              >
                <IoIosArrowForward />
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/About"
                className="flex flex-row items-center  border-b-2 p-2 text-gray-500"
              >
                <IoIosArrowForward />
                About US
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/Blog"
                className="flex flex-row items-center  border-b-2 p-2 text-gray-500"
              >
                <IoIosArrowForward />
                Blog
              </Link>
            </ListItem>
          </List>
          <Button
            onClick={() =>
              window.open("https://g.page/r/CYSIQkseQ0BiEBM/review")
            }
            rightIcon={<FcGoogle size={42} className="" />}
            variant="ghost"
            colorScheme="black"
            className="me-[20%] md:text-black md:first-letter:font-bold md:font-semibold md:text-xl"
          >
            | RATE US ON{" "}
          </Button>
        </div>
        <div className="w-auto">
          <div className=" font-semibold md:first-letter:font-bold md:font-semibold md:block md:text-xl md:w-fit ">
            | USEFUL LINKS
          </div>
          <List
            className=" text-sm md:text-base "
            spacing={3}
            margin={2}
            marginLeft={-2}
          >
            <ListItem>
              <Link
                href="/Career"
                className="flex flex-row items-center  border-b-2 p-2 text-gray-500"
              >
                <IoIosArrowForward />
                Career
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/Directors"
                className="flex flex-row items-center  border-b-2 p-2 text-gray-500"
              >
                <IoIosArrowForward />
                Directors
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/Statistics"
                className="flex flex-row items-center  border-b-2 p-2 text-gray-500"
              >
                <IoIosArrowForward />
                Statistics
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/"
                className="flex flex-row items-center  border-b-2 p-2 text-gray-500"
              >
                <IoIosArrowForward />
                Privacy Policy
              </Link>
            </ListItem>
            <ListItem className="flex flex-row items-center whitespace-nowrap  border-b-2 p-2 text-gray-500">
              <IoIosArrowForward />
              Terms And Condition
            </ListItem>
          </List>
        </div>
        <div className="w-auto">
          <div className="font-semibold md:first-letter:font-bold md:font-semibold md:block md:text-xl md:mb-5">
            | CONTACT US
          </div>
          <List spacing={4} margin={2}>
            <ListItem className="flex flex-col items-start Inknut text-black gap-3 mb-6">
              <h3 className=" font-semibold text-base md:font-semibold md:text-base ">
                Address:
              </h3>
              <p className=" font-mono text-sm font-medium text-gray-500">{`Kolkata, West Bengal`}</p>
            </ListItem>
            <ListItem className="flex flex-col items-start Inknut text-black gap-3 mb-6">
              <h3 className=" font-semibold text-base ">Email:</h3>
              <p className=" font-mono text-sm font-medium text-gray-500">
                support@sicu-aura.com
              </p>
            </ListItem>
            <ListItem className="flex flex-col items-start Inknut text-black gap-3">
              <h3 className=" font-semibold text-base ">Contact Number:</h3>
              <p className=" font-mono text-sm w-max font-medium text-gray-500">
                +91-6290858326<span className="collapse">+91-6290858326</span>
              </p>
            </ListItem>
          </List>
        </div>
        <div className="w-auto ">
          <div className="font-semibold md:first-letter:font-bold md:font-semibold md:block md:text-xl ">
            | SUBSCRIPTION
          </div>
          <p className="text-gray-500 text-[80%] tracking-wide leading-5  my-[5%] md:font-Inknut md:text-gray-500 md:font-light md:text-xs md:w-72 md:my-4 md:tracking-wider md:leading-5 ">
            With Our Skills Put Together, You Get An Ensemble Capable Of Doing
            Anything And Everything The Brand Needs. Follow Us To Get Our Latest
            Updates.
          </p>
          <InputGroup className="text-xs md:w-full">
            <Input
              placeholder="Enter your Email"
              value={email}
              onChange={handleInputChange}
              className=""
            />
            <InputRightElement className="w-fit">
              <Button
                onClick={handleButtonClick}
                className="w-auto text-[8px]  md:w-full md:h-full md:flex flex-row md:items-center md:justify-end bg-black text-white md:hover:bg-gray-200 hover:text-black transition-all  md:text-md"
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>

          <div className=" font-semibold mt-[5%] md:first-letter:font-bold md:font-semibold md:block md:text-xl md:mt-6 ">
            | FOLLOW US ON
          </div>
          <div className="flex flex-row items-center gap-4 mb-6 mt-2 text-4xl justify-start">
            <Image
              className=" w-[17%] md:hover:cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/company/sicu-aura/")
              }
              src={linkedin}
            />
            <Image
              className=" w-[17%] md:hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100092369332099&mibextid=LQQJ4d"
                )
              }
              src={facebook}
            />
            {/* <Image
              className=" w-[17%] md:hover:cursor-pointer"
              onClick={() => window.open("https://twitter.com/SicuAura")}
            /> */}
            <Image
              className=" w-[17%] md:hover:cursor-pointer"
              onClick={() => window.open("https://instagram.com/sicu.aura")}
              src={instagram}
            />
            {/* <FaLinkedin className=' hover:cursor-pointer' onClick={()=>window.open('https://www.linkedin.com/company/sicu-aura/')} />
                <FaSquareFacebook className=' hover:cursor-pointer' onClick={()=>window.open('https://www.facebook.com/profile.php?id=100092369332099&mibextid=LQQJ4d')} />
                <FaTwitter className=' hover:cursor-pointer' onClick={()=>window.open('https://twitter.com/SicuAura')} /> */}
            <Image
              className="w-[20%] md:hover:cursor-pointer md:w-16"
              onClick={() =>
                window.open(
                  "https://whatsapp.com/channel/0029Va90UM46RGJGdjSrNH3E"
                )
              }
              src={whatsapp}
            />
          </div>
        </div>
      </section>
      <p className="px-5 text-center">{`*Terms and Condition Applied* | Copyright © 2023 Sicu-Aura. All Rights Reserved.`}</p>
    </footer>
  );
};

export default Footer;
