"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Skeleton,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { db } from "@/firebase/firebase.config";
import {
  query,
  collection,
  onSnapshot,
  orderBy
} from "firebase/firestore";
import Image from "next/image";
import Socials from "../Socials";
import Footer2 from "../Footer2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Footer from "../Footer";

export default function Blog() {
  
  const [posts, setPosts] = useState([])
  const [milestones, setMilestones] = useState([])
  const [ isLoading, setIsLoading ] = useState(true);
  console.log(posts)
  useEffect(  ()  => {
    
    const q = query(collection(db, 'blogPosts'), orderBy('date', 'asc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) =>{
        let postsArr = []
        querySnapshot.forEach((doc) => {
          postsArr.push({...doc.data(), id: doc.id})
        });
        // console.log(postsArr)
        setPosts(postsArr)
        setIsLoading(false)
        
      })
  
      return () => unsubscribe();
    
  },[])
  useEffect(  ()  => {
    
    const q = query(collection(db, 'milestones'));
      const unsubscribe = onSnapshot(q, (querySnapshot) =>{
        let postsArr = []
        querySnapshot.forEach((doc) => {
          postsArr.push({...doc.data(), id: doc.id})
        });
        console.log(postsArr)
        setMilestones(postsArr)
        setIsLoading(false)
        
      })
  
      return () => unsubscribe();
    
  },[])

  const tempPost1 = [
    {
      imageUrl: `https://media.licdn.com/dms/image/D4D22AQHVfGfwEMIyjA/feedshare-shrink_800/0/1691415138874?e=1708560000&v=beta&t=KdFMUi67cZvDfQXItlXdCOaq3gx-nYrrXGC60Cpm8Pg`,
      Date: "22.01.2024",
      title: `What is the work-life balance like at your company `,
      tagline: ` If you're looking for a job with a good work-life balance, be sure to ask about these things during your interview. You can also look for companies that have been recognized for their work-life balance policies, such as the "Best Companies to Work For" list.`,
    },

    {
      imageUrl: `https://media.licdn.com/dms/image/D4D22AQFkR9Sm_Ud-tA/feedshare-shrink_800/0/1701008941342?e=1708560000&v=beta&t=jzkI4idMSQmXqL0ia7XUCf47BNJIGzzrfzjdcQuUr1E`,
      Date: "22.01.2024",
      title: `Remembering the 26/11 Mumbai Attack `,
      tagline: `We Did It! 4,000 Strong and Growing on LinkedIn!
    
    A huge shoutout to our incredible team and community for helping us reach a major milestone: 4,000 followers on LinkedIn!
    
    We're humbled by your continued support and engagement.`,
    },
    {
      imageUrl: `https://media.licdn.com/dms/image/D5622AQFOZScMU1YHTg/feedshare-shrink_800/0/1705061970311?e=1708560000&v=beta&t=prtUNKMdUDNqLs4yOdJ7ccpYYwPFBfN3JME2UNH2gH0`,
      Date: "22.01.2024",
      title: `We Did It! 
    on LinkedIn! `,
      tagline: `We Did It! 4,000 Strong and Growing on LinkedIn!
    
    A huge shoutout to our incredible team and community for helping us reach a major milestone: 4,000 followers on LinkedIn!
    
    We're humbled by your continued support and engagement.`,
    },
    {
      imageUrl: `https://media.licdn.com/dms/image/D5622AQFOZScMU1YHTg/feedshare-shrink_800/0/1705061970311?e=1708560000&v=beta&t=prtUNKMdUDNqLs4yOdJ7ccpYYwPFBfN3JME2UNH2gH0`,
      Date: "22.01.2024",
      title: `We Did It! 
    on LinkedIn! `,
      tagline: `We Did It! 4,000 Strong and Growing on LinkedIn!
    
    A huge shoutout to our incredible team and community for helping us reach a major milestone: 4,000 followers on LinkedIn!
    
    We're humbled by your continued support and engagement.`,
    },
  ];
  const tempPost = [
    {
      imageUrl: `https://media.licdn.com/dms/image/D5622AQFOZScMU1YHTg/feedshare-shrink_800/0/1705061970311?e=1708560000&v=beta&t=prtUNKMdUDNqLs4yOdJ7ccpYYwPFBfN3JME2UNH2gH0`,
      Date: "16 January, 2024",
      title: `
      `,
      tagline: `We Did It! 4,000 Strong and Growing on LinkedIn!
      
     `,
      id: 6,
    },
    {
      imageUrl: `https://media.licdn.com/dms/image/D5622AQHJGDZsGd_WFQ/feedshare-shrink_800/0/1699162069227?e=1708560000&v=beta&t=SiWZ4v2jiLSsgb5MooiKbf41H4wyL-pHK0QQMuhHkNE`,
      Date: "22 November, 2023",
      title: `
      `,
      tagline: `We Did It! 3,000 Strong and Growing on LinkedIn!
      
      .`,
      id: 5,
    },
    {
      imageUrl: `https://media.licdn.com/dms/image/D5622AQGaPKzX_chYLA/feedshare-shrink_800/0/1694149095570?e=1708560000&v=beta&t=cCVqIh-USJYX52VxPF2OBMkSnWDOZ3-Ec0WgX766uiY`,
      Date: "18 September, 2023",
      title: `
      `,
      tagline: `We Did It! 2000 Strong and Growing on LinkedIn!
      
      
      .`,
      id: 4,
    },
    {
      imageUrl: `https://media.licdn.com/dms/image/D4D22AQErGnCS9qiwdg/feedshare-shrink_800/0/1688230695918?e=1708560000&v=beta&t=V7SReNKe2Q0iVJ-O7DDr8BK8xmepOvqzq9YkJmtBM8w`,
      Date: "16 June, 2023",
      title: `
      `,
      tagline: `We Did It! 1000 Strong and Growing on LinkedIn!
      .`,
      id: 3,
    },
    {
      imageUrl: `https://media.licdn.com/dms/image/D4D22AQFza-LAuXKvzQ/feedshare-shrink_800/0/1684084328312?e=1708560000&v=beta&t=GJjtbXPRAj86sZw9xQzSAh17eGtRNMVf8c8NFInls9c`,
      Date: "28 April, 2023",
      title: `
      `,
      tagline: `We Did It! 500 Strong and Growing on LinkedIn!
      
      `,
      id: 2,
    },
    {
      imageUrl: `https://media.licdn.com/dms/image/D4D22AQFyeVENXyp6kA/feedshare-shrink_800/0/1683864573929?e=1708560000&v=beta&t=PEmn-IMzy-VasOqSaRehb6mHvTr8h4dlmolcxtP2fhk`,
      Date: "03 June, 2023",
      title: `
    `,
      tagline: `We Did It! 100 Strong and Growing on LinkedIn!.`,
      id: 1,
    },
  ];

  return (
  //   <main className="flex flex-col w-screen h-auto items-center justify-between font-Kadwa">
  //     <Navbar />
  //     <h1 className=" font-Kadwa font-bold text-5xl md:text-6xl lg:text-9xl my-12 border-b border-gray-400 w-max px-64 text-center">
  //       THE BLOG
  //     </h1>

  //     {isLoading ? (
  //       <Spinner size="xl" speed="0.65s" />
  //     ) : (
  //       <section className="w-screen h-auto py-12 my-4 flex flex-col md:flex-row justify-center px-8 gap-12">
  //         <div>
  //           <Socials top="40" />
  //         </div>
  //         <section className="flex-1 flex flex-col gap-6 justify-evenly items-start ">
  //           <div className=" flex flex-col w-full gap-3">
  //             {/* <Image
  //               src={posts[0].imageUrl}
  //               loading="eager"
  //               height="439"
  //               width="710"
  //               className=" object-cover"
  //               alt="blogpost banner"
  //             /> */}
  //                             <video width="700" height="450" controls autoPlay>
  //                 <source src={posts[0].imageUrl} type="video/mp4" />
  //                 Your browser does not support the video tag.
  //               </video>  
         
  //             <p className=" text-ellipsis font-Kadwa text-sm font-extralight">
  //               {posts[0].date}
  //             </p>
  //             <h2 className="font-Kadwa font-bold text-2xl my-4">
  //               {posts[0].title}
  //             </h2>
  //             <p
  //               className="font-Kadwa font-bold text-xs my-4"
  //               style={{ color: "#6D6D6D" }}
  //             >
  //               {posts[0].tagline}...
  //               <Link
  //                 href={`/Blog/${posts[0].id}`}
  //                 className="text-xs ms-2"
  //                 style={{ color: "violet" }}
  //               >
  //                 <Button colorScheme='teal'>
  //                           Read More
  //                         </Button>
  //               </Link>
  //             </p>
  //           </div>
  //         </section>
  //         <section className=" flex flex-1 flex-col gap-0 ">
  //           <p className=" font-Kadwa font-medium text-lg text-gray-400">
  //             Latest Uploads
  //           </p>
  //           <div className="flex flex-row border-b border-gray-400 py-10 ">
  //             <Image
  //               src={posts[1].imageUrl}
  //               loading="eager"
  //               height="100"
  //               width="200"
  //               className=" object-cover"
  //               alt="blogpost banner"
  //             />
  //             <div className=" flex flex-col ps-10 items-start justify-center">
  //               <p className=" text-ellipsis font-Kadwa text-sm font-extralight">
  //                 {posts[1].date}
  //               </p>
  //               <h2 className="font-Kadwa font-bold text-lg my-4">
  //                 {posts[1].title}
  //               </h2>
  //               <Link
  //                 href={`/Blog/${posts[1].id}`}
  //                 className="text-xs ms-2"
  //                 style={{ color: "violet" }}
  //               >
  //                 Read More
  //               </Link>
  //             </div>
  //           </div>
  //           <div className="flex flex-row border-b border-gray-400 py-10 ">
  //             <Image
  //               src={posts[2].imageUrl}
  //               loading="eager"
  //               height="100"
  //               width="150"
  //               className=" object-cover"
  //               alt="blogpost banner"
  //             />
  //             <div className=" flex flex-col ps-10 items-start justify-center">
  //               <p className=" text-ellipsis font-Kadwa text-sm font-extralight">
  //                 {posts[2].date}
  //               </p>
  //               <h2 className="font-Kadwa font-bold text-lg my-4">
  //                 {posts[2].title}
  //               </h2>
  //               <Link
  //                 href={`/Blog/${posts[2].id}`}
  //                 className="text-xs ms-2"
  //                 style={{ color: "violet" }}
  //               >
  //                 Read More
  //               </Link>
  //             </div>
  //           </div>
  //           <div className="flex flex-row  py-10 ">
  //             <Image
  //               src={posts[3].imageUrl}
  //               loading="eager"
  //               height="100"
  //               width="150"
  //               className=" object-cover"
  //               alt="blogpost banner"
  //             />
  //             <div className=" flex flex-col ps-10 items-start justify-center">
  //               <p className=" text-ellipsis font-Kadwa text-sm font-extralight">
  //                 {posts[3].date}
  //               </p>
  //               <h2 className="font-Kadwa font-bold text-lg my-4">
  //                 {posts[3].title}
  //               </h2>
  //               <Link
  //                 href={`/Blog/${posts[3].id}`}
  //                 className="text-xs ms-2"
  //                 style={{ color: "violet" }}
  //               >
  //                 Read More
  //               </Link>
  //             </div>
  //           </div>
  //         </section>
  //       </section>
  //     )}
  //     {isLoading ? (
  //       <section className="w-screen h-auto  my-96 flex flex-col px-12 gap-2">
  //         <Skeleton height="20px" />
  //         <Skeleton height="20px" />
  //         <Skeleton height="20px" />
  //       </section>
  //     ) : (
  //       <div>
  //         <Heading
  //           className="text-gray-400 font-Kadwa bg-white mt-6 pt-10 px-44"
  //           size="md"
  //         >
  //           Papular blogs
  //         </Heading>
  //         <section className="w-screen flex flex-row items-center justify-center bg-white py-12">
  //           <div className="w-11/12 h-full flex flex-row items-center ">
  //             {/* <IoIosArrowDropleft size={30} className="text-black custom-prev-button" /> */}
  //             <Swiper
  //               id="swiper-color"
  //               slidesPerView={4}
  //               spaceBetween={0}
  //               roundLengths={true}
  //               loop={true}
  //               pagination={{
  //                 clickable: true,
  //               }}
  //               centeredSlides={true}
  //               centeredSlidesBounds={true}
  //               navigation={true}
  //               modules={[Navigation]}
  //               rewind={true}
  //               breakpoints={{
  //                 320: {
  //                   slidesPerView: 1,
  //                   spaceBetween: 10,
  //                 },
  //                 768: {
  //                   slidesPerView: 3,
  //                   spaceBetween: 10,
  //                 },
  //               }}
  //               className="mySwiper"
  //             >
  //               {posts &&
  //                 posts.map((post, index) => (
  //                   <SwiperSlide key={index} className="mx-1">
  //                     <Card
  //                       direction={{ base: "column", sm: "row" }}
  //                       overflow="hidden"
  //                       variant="outline"
  //                       className="flex flex-col items-center justify-center p-1 rounded-none"
  //                       style={{
  //                         border: "none",
  //                         borderRight: "solid 1px lightgray",
  //                       }}
  //                     >
  //                       <Image
  //                         width="250"
  //                         height="150"
  //                         src={post.imageUrl}
  //                         loading="lazy"
  //                         alt="blogpost banner"
  //                         className=" w-[250] h-[150px] object-cover relative rounded-md "
  //                       />
  //                       <small className="me-44 font-Kadwa text-gray-400 text-xs mt-1">
  //                         {post.date}
  //                       </small>
  //                       <Stack style={{ width: "290px" }}>
  //                         <CardBody>
  //                           <Heading size="md" className="text-black">
  //                             {post.title}
  //                           </Heading>

  //                           <Text
  //                             py="2"
  //                             className="text-gray-600 text-sm tracking-widest"
  //                           >
  //                             {post.tagline}...
  //                             <Link
  //                               key={index}
  //                               href={`/Blog/${post.id}`}
  //                               className="text-xs ms-2"
  //                               style={{ color: "violet" }}
  //                             >
  //                               Read More
  //                             </Link>
  //                           </Text>
  //                         </CardBody>
  //                       </Stack>
  //                     </Card>
  //                   </SwiperSlide>
  //                 ))}
  //             </Swiper>
  //           </div>
  //         </section>
  //       </div>
  //     )}
  //     {isLoading ? (
  //       <section className="w-screen h-auto  my-96 flex flex-col px-12 gap-2">
  //         <Skeleton height="20px" />
  //         <Skeleton height="20px" />
  //         <Skeleton height="20px" />
  //       </section>
  //     ) : (
  //       <section className="w-screen flex flex-row items-center justify-center bg-[#EECFBA] pt-2 md:py-12">
  //         <Swiper
  //           id="swiper-color"
  //           slidesPerView={4}
  //           spaceBetween={0}
  //           centeredSlides={true}
  //           pagination={{
  //             clickable: true,
  //           }}
  //           navigation={true}
  //           modules={[Navigation]}
  //           loop={true}
  //           breakpoints={{
  //             320: {
  //               slidesPerView: 1,
  //               spaceBetween: 10,
  //             },
  //             768: {
  //               slidesPerView: 3,
  //               spaceBetween: 10,
  //             },
  //           }}
  //           className="mySwiper "
  //         >
  //           {posts &&
  //             posts.map((post, index) => (
  //               <SwiperSlide key={index}>
  //                 <Card
  //                   direction={{ base: "column", sm: "row" }}
  //                   overflow="hidden"
  //                   variant="outline"
  //                   className="flex flex-col items-center gap-5 justify-center text-center p-1 rounded-none bg-transparent py-5"
  //                   style={{
  //                     border: "none",
  //                     borderRight: "solid 1px lightgray",
  //                   }}
  //                 >
  //                   <Image
  //                     width="250"
  //                     height="150"
  //                     src={post.imageUrl}
  //                     loading="lazy"
  //                     alt="blogpost banner"
  //                     className=" w-[250] h-[250px] object-cover relative rounded-md "
  //                   />
  //                   <Stack style={{ width: "290px" }}>
  //                     <CardBody>
  //                       <Heading size="md" className="text-black">
  //                         Post:{index + 1}
  //                         {post.title}
  //                       </Heading>

  //                       <Text
  //                         py="10"
  //                         className="text-gray-600 text-sm tracking-widest"
  //                       >
  //                         {post.tagline}...
  //                       </Text>
  //                       <p
  //                         className=""
  //                         style={{ color: "#A3836D", lineHeight: 1.8 }}
  //                       >
  //                         Wed jul 22.2024
  //                       </p>
  //                       <Link
  //                         key={index}
  //                         href={`/Blog/${post.id}`}
  //                         className="text-xs ms-2"
  //                         style={{ color: "violet" }}
  //                       >
  //                         <button
  //                           className="text-xs mt-10"
  //                           style={{
  //                             padding: "10px 30px 10px 30px",
  //                             backgroundColor: "#A3836D",
  //                             color: "white",
  //                             fontWeight: "normal",
  //                             borderRadius: "5px",
  //                           }}
  //                         >
  //                           Read More
  //                         </button>
  //                       </Link>
  //                     </CardBody>
  //                   </Stack>
  //                 </Card>
  //               </SwiperSlide>
  //             ))}
  //         </Swiper>
  //       </section>
  //     )}

  //     <Footer></Footer>
  // </main>
    <main className="flex flex-col w-screen h-auto items-center justify-between font-Kadwa">
      <Navbar />
      <h1 className=" font-Kadwa font-bold text-5xl md:text-6xl lg:text-9xl mb-12 mt-20 border-b border-gray-400 w-max px-64 text-center">
        THE BLOG
      </h1>
      {isLoading ? (
          <Spinner size='xl' speed='0.65s' />
        ) : (
      <section className="w-screen h-auto pt-12 flex flex-col md:flex-row justify-center px-[7%] me-[7%] gap-12">
        <div>
          <Socials top="40" />
        </div>
        <section className="flex-1 flex flex- justify-between items-start  ">
          <div className=" flex flex-col gap-3 mb-24">
            <div className="w-[110%] ">
            <video  controls autoPlay>
      <source src={posts[0].imageUrl} type="video/mp4" />
     
    </video>

            </div>
            {/* <Image
              src={posts[0].imageUrl}
              loading="eager"
              height="439"
              width="710"
              className=" object-cover"
              alt="blogpost banner"
            /> */}
            <p className=" text-ellipsis text-[#6d6d6d] font-Kadwa text-sm font-extralight">
              {posts[0].date}
            
            </p>
            <h2 className="font-Kadwa font-bold text-2xl my-4">
              {posts[0].title}
          
            </h2>
            <p
              className="font-Kadwa font-bold text-sm my-4"
              style={{ color: "#6D6D6D" }}
            >
              {posts[0].tagline}...
              <Link
                href={`/Blog/${posts[0].id}`}
                className="text-xs ms-2"
                style={{ color: "violet" }}
              >
                Read More
              </Link>
      
            </p>
          </div>
        </section>
        {/* <section className=" flex flex-1 flex-col gap-0 ">
                <p className=" font-Kadwa font-medium text-lg text-gray-400">
                  Latest Uploads
                </p>
                <div className="flex flex-row border-b border-gray-400 py-10 ">
         
         
                  <video width="200" height="100" controls>
                    <source src={posts[1].imageUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className=" flex flex-col ps-10 items-start justify-center">
                    <p className=" text-ellipsis font-Kadwa text-sm font-extralight">
                      {posts[1].date}
                    </p>
                    <h2 className="font-Kadwa font-bold text-lg my-4">{posts[1].title}</h2>
                    <Link href={`/Blog/${posts[1].id}`}className="text-xs ms-2" >
                      <Button colorScheme='teal'>
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row border-b border-gray-400 py-10 ">
                  <Image src={posts[2].imageUrl} loading='eager' height='100' width='150' className="" alt="blogpost banner"/>
                  <div className=" flex flex-col ps-10 items-start justify-center">
                    <p className=" text-ellipsis font-Kadwa text-sm font-extralight">
                      {posts[2].date}
                    </p>
                    <h2 className="font-Kadwa font-bold text-lg my-4">{posts[2].title}</h2>
                    <Link href={`/Blog/${posts[2].id}`}className="text-xs ms-2" >
                      <Button colorScheme='teal'>
                        Read More
                      </Button>
                    </Link>
                    
                    </div>
                </div>
                    <div className="flex flex-row  py-10 ">
                      <Image src={posts[3].imageUrl} loading='eager' height='100' width='150' className=" object-cover" alt="blogpost banner"/>
                      <div className=" flex flex-col ps-10 items-start justify-center">
                        <p className=" text-ellipsis font-Kadwa text-sm font-extralight">
                          {posts[3].date}
                        </p>
                        <h2 className="font-Kadwa font-bold text-lg my-4">{posts[3].title}</h2>
                        <Link href={`/Blog/${posts[3].id}`}className="text-xs ms-2" style={{color:"violet"}}>
                          <Button colorScheme='teal'>
                            Read More
                          </Button>
                        </Link>
                        
                      </div>
                    </div>
                    
                </section>           */}
                 <section className=" flex flex-1 flex-col gap-0 ms-[4%] " >
           <p className=" font-Kadwa  text-lg font-semibold text-gray-400">
         Latest Uploads
         </p>
          <div className="flex flex-row border-b border-gray-400 py-5 ">
            {/* <Image
    //           src={posts[1].imageUrl}
    //           loading="eager"
    //           height="100"
    //           width="200"
    //           className=" object-cover"
    //           alt="blogpost banner"
    //         /> */}
           {/* <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7064501702707560448?compact=1"
              height="200"
              width="300"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe> */}
              <video width="200" height="100" controls>
                    <source src={posts[1].imageUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            <div className=" flex flex-col ps-10 items-start justify-center">
              <p className=" text-[#6d6d6d] text-ellipsis font-Kadwa text-sm font-extralight">
                {posts[1].date}
             
              </p>
              <h2 className="font-Kadwa font-bold text-lg my-4">
                {posts[1].title}
             
              </h2>
              <Link
                href={`/Blog/${posts[1].id}`}
                className="text-xs ms-2"
                style={{ color: "violet" }}
              >
                 <Button colorScheme='teal'>
                        Read More
                      </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-400 py-10 h-[210px] ">
            <Image
              src={posts[2].imageUrl}
              loading="eager"
              height="100"
              width="200"
              className=" object-cover"
              alt="blogpost banner"
            />
            {/* <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7088127955763101696?compact=1"
              height="200"
              width="300"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe> */}
            <div className=" flex flex-col ps-10 items-start justify-center">
              <p className=" text-[#6d6d6d] text-ellipsis font-Kadwa text-sm font-extralight">
                {posts[2].date}
             
              </p>
              <h2 className="font-Kadwa font-bold text-lg my-4">
                {posts[2].title}
            
              </h2>
              <Link
                href={`/Blog/${posts[2].id}`}
                className="text-xs ms-2"
                style={{ color: "violet" }}
              >
                  <Button colorScheme='teal'>
                        Read More
                      </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-row  py-10 ">
            <Image
              src={posts[3].imageUrl}
              loading="eager"
              height="100"
              width="200"
              className=" object-cover"
              alt="blogpost banner"
            />
            {/* <img
              src="https://media.licdn.com/dms/image/D5622AQFOZScMU1YHTg/feedshare-shrink_800/0/1705061970311?e=1708560000&v=beta&t=prtUNKMdUDNqLs4yOdJ7ccpYYwPFBfN3JME2UNH2gH0"
              height="300"
              width="300"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></img> */}
            <div className=" flex flex-col ps-10 items-start justify-center">
              <p className=" text-[#6d6d6d] text-ellipsis font-Kadwa text-sm font-extralight">
                {posts[3].date}
              
              </p>
              <h2 className="font-Kadwa font-bold text-lg my-4">
                {posts[3].title}
            
              </h2>
              <Link
                href={`/Blog/${posts[3].id}`}
                className="text-xs ms-2"
                style={{ color: "violet" }}
              >
                  <Button colorScheme='teal'>
                        Read More
                      </Button>
              </Link>
            </div>
          </div>
        </section>
  
      </section>
 )}
     { isLoading ? (
            <section className="w-screen h-auto  my-96 flex flex-col px-12 gap-2">
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </section>
          ) : (
      <div>
        <Heading
          className="text-gray-400 font-Kadwa bg-white pt-10 px-40"
          size="md"
        >
          Papular Blogs
        </Heading>
        <section className="w-screen flex flex-row items-center justify-center bg-white py-12">
          <div className="w-11/12 h-full flex flex-row items-center ">
            <Swiper
              id="swiper-color"
              slidesPerView={4}
              spaceBetween={0}
              roundLengths={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              centeredSlidesBounds={true}
              navigation={true}
              modules={[Navigation]}
              rewind={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {posts &&
                posts.map((post, index) => (
                  <SwiperSlide key={post.id} className="mx-1">
                    <Card
                      direction={{ base: "column", sm: "row" }}
                      overflow="hidden"
                      variant="outline"
                      className="flex flex-col items-center justify-center p-1 rounded-none"
                      style={{
                        border: "none",
                        borderRight: "solid 1px lightgray",
                      }}
                    >
                     {post.imageUrl.includes('.mp4') ? (
                            <video width="300" height="200" controls>
                              <source src={post.imageUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <Image
                              width='200'
                              height='100'                   
                              src={post.imageUrl}                    
                              loading="lazy"
                              alt='blogpost banner'
                              className=" w-[300px] h-[170px] relative "
                            />
                          )}
                      {/* <iframe src={post.imageUrl} height="150" width="250" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> */}
                      <small className="me-44 font-Kadwa text-gray-400 text-xs mt-1">
                        {post.Date}
                      </small>
                      <Stack style={{ width: "350px" }}>
                        <CardBody>
                          <Heading size="md" className="text-black py-2">
                            {post.title}
                          </Heading>

                          <Text
                            py="2"
                            className="text-gray-600 text-sm tracking-widest"
                          >
                            {post.tagline}...
                            <Link
                          key={index}
                          href={`/Blog/${post.id}`}
                          className="text-xs ms-2"
                          style={{ color: "violet" }}
                        >
                          Read More
                        </Link>
                          </Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>
      </div>
         )
        }
   { isLoading ? (
            <section className="w-screen h-auto  my-96 flex flex-col px-12 gap-2">
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </section>
          ) : (
      <section className="w-screen flex flex-row items-center justify-center bg-[#EECFBA] pt-2 md:py-12">
        <div className="bg-white w-[470px] h-[650px] absolute flex justify-center"></div>
        <Swiper
          id="swiper-color"
          slidesPerView={4}
          spaceBetween={0}
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper "
        >
          <div>
          {tempPost.map((post, index) => (
                <SwiperSlide key={post.id}>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    className="flex flex-col items-center gap-5 justify-center text-center p-1 rounded-none bg-transparent py-5"
                    style={{
                      border: "none",
                      borderRight: "solid 1px lightgray",
                    }}
                  >
                    <img
                      width="400"
                      height="300"
                      src={post.imageUrl}
                      loading="lazy"
                      alt="blogpost banner"
                      className=" w-[400] h-[300px] pt-5 relative rounded-md "
                    />
                    <Stack style={{ width: "290px" }}>
                      <CardBody>
                        <Heading size="md" className="text-black">
                          Post : {post.id}
                          {/* {post.title} */}
                        </Heading>

                        <Text py="10" className="text-gray-600 text-lg">
                          {post.tagline}
                        </Text>
                        
                        <p
                          className=""
                          style={{ color: "#A3836D", lineHeight: 1.8 }}
                        >
                          {post.Date}
                        </p>
                        <Link
                          key={index}
                          href={`/Blog/${post.id}`}
                          className="text-xs ms-2"
                          style={{ color: "violet" }}
                        >
                          <button
                            className="text-xs mt-10"
                            style={{
                              padding: "10px 30px 10px 30px",
                              backgroundColor: "#A3836D",
                              color: "white",
                              fontWeight: "normal",
                              borderRadius: "5px",
                            }}
                          >
                            Read More
                          </button>
                        </Link>
                      </CardBody>
                    </Stack>
                  </Card>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </section>
 )}
      <Footer></Footer>
    </main>
  );
}
