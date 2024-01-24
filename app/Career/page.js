import Image from "next/image"
import Navbar from "../Navbar"
import Socials from "../Socials"
import { Box, Card, CardBody, CardHeader, Button, Heading, Stack, Text, StackDivider } from "@chakra-ui/react"

import Careerimg from "@/public/career.svg"
import ImgGrp from "@/public/ImgGrp.svg"
import Careers1 from "@/public/careers1.svg"
import Careers2 from "@/public/careers2.svg"
import Footer2 from "../Footer2"
import Link from "next/link"
import Footer from "../Footer"

export const metadata = {
  title: 'Career',
  description: 'Home Page for Sicu Aura',
}

export default function Career() {
  return (
    <main className="flex flex-col w-screen h-auto font-Inknut">
      <Navbar />
      
      <section className="w-screen h-auto flex flex-col my-12">
        <Image width={1920} height={1080} src={Careerimg} alt="Career" />
        <Socials top="40" />

        <section className=" md:flex md:flex-row md:justify-around mb-12 mt-28 mx-[10%] career-content">
          <Image width={620} height={410} className="w-auto h-auto sm:p-8" src={ImgGrp} alt="Group" />
          <div className=" md:font-Inknut  font-medium text-sm text-justify gap-6 flex flex-col w-auto justify-evenly mt-5">
            <p>{`At Sicu-Aura, we're not just building technology, we're building a better future. We believe that innovation shouldn't just be cool, it should be impactful. It should empower people, protect lives, and make the world a little easier to navigate. We're looking for engineers, designers, data scientists, and dreamers who share our vision.`}</p>
            <p>{`At Sicu-Aura, your work isn't just a job, it's a mission. You'll see the direct impact of your efforts, knowing you're making a tangible difference in people's lives.`}</p>
            <p>{`We foster an environment where your ideas take center stage. Here, you'll collaborate with brilliant minds, break boundaries, and push the limits of what's possible.`}</p>
          </div>
        </section>
        <section className=" my-12 mx-6 flex flex-col gap-6">
          <h1 className=" font-Inknut font-semibold text-4xl text-center ">
            Our Job Openings
          </h1>
          <Card className=" text-white bg-transparent my-6 mx-[10%] mt-16">
            <CardBody >
              <Stack divider={<StackDivider />} spacing='4' >
                <Box className="md:flex flex-row justify-between items-center">
                  <div className=" w-10/12">
                    <Heading size='lg' textTransform='uppercase'>
                      UI-UX Designer
                    </Heading>
                    <Text pt='4' pb='5'  fontSize='sm'>
                    {/* {`Lorem ipsum dolor sit amet consectetur. Massa fringilla volutpat vitae vitae vulputate. Ac scelerisque leo amet magna id pretium. Duis posuere aliquet ac id tincidunt lorem tempus consectetur vitae.`} */}
                    Expired.
                    </Text>
                  </div>
                  <Button className="bg-[#ff3535] text-white text-sm font-normal hover:bg-[#E8246F] mb-[5%]" borderRadius='full'>
                  Closed
                  </Button>
                </Box>
                <Box className="md:flex flex-row justify-between items-center">
                  <div className=" w-10/12 mt-10">
                    <Heading size='lg' textTransform='uppercase'>
                    SDE Full-Stack Developer
                    </Heading>
                    <Text pt='4' pb='5' fontSize='sm'>
                    Expired.
                    {/* {`Lorem ipsum dolor sit amet consectetur. Massa fringilla volutpat vitae vitae vulputate. Ac scelerisque leo amet magna id pretium. Duis posuere aliquet ac id tincidunt lorem tempus consectetur vitae.`} */}
                    </Text>
                  </div>
                  <Link href="/Career/3bKAYuaccKaJXKnP1rQv">
                    <Button className="bg-[#ff2929] text-white text-sm font-normal hover:bg-[#E8246F] mb-[5%]" borderRadius='full'>
                    Closed
                    </Button>
                  </Link>
                </Box>
                <Box className="md:flex flex-row justify-between items-center">
                  <div className=" w-10/12 mt-10">
                    <Heading size='lg' textTransform='uppercase'>
                    Marketing Manager
                    </Heading>
                    <Text pt='4'pb='5' fontSize='sm'>
                    Expired.
                    {/* {`Lorem ipsum dolor sit amet consectetur. Massa fringilla volutpat vitae vitae vulputate. Ac scelerisque leo amet magna id pretium. Duis posuere aliquet ac id tincidunt lorem tempus consectetur vitae.`} */}
                    </Text>
                  </div>
                  <Button  className="bg-[#ff2f2f] text-white text-sm font-normal hover:bg-[#E8246F] " borderRadius='full'>
                   Closed
                  </Button>
                </Box>
                
              </Stack>
            </CardBody>
          </Card>
        </section>
        <section className="md:flex flex-row justify-around mx-12 my-8 shrink-0 sm:block">
          <Image className="w-auto h-auto" src={Careers1} alt="Group" />
          <Image  className="w-auto h-auto" src={Careers2} alt="Group" />
        </section>
      </section>
      <Footer />
    </main>
  )
}