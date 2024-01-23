'use client'
import React, { useState, useEffect } from 'react'
import { Box, HStack } from "@chakra-ui/react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Frame1  from './Frame1'
import Frame2  from './Frame2'
import Frame3  from './Frame3'
import Frame4  from './Frame4'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const components = [
  <Frame1 key="frame1" />,
  <Frame2 key="frame2" />,
  <Frame3 key="frame3" />,
  <Frame4 key="frame4" />
];

const DotIndicator = ({ index, onClick }) => {
  return (
    <HStack spacing="18px">
      {Array.from({ length: 4 }).map((_, i) => (
        <Box
          key={i}
          w="10px"
          h="10px"
          borderRadius="full"
          bgColor={i === index ? "blue.500" : "gray.300"}
          width={i === index ? "30px" : "10px"}
          style={{cursor:"pointer"}}
          transition="width 0.6s ease-in-out"
          onClick={() => onClick(i)}
        />
      ))}
    </HStack>
  )
}

const Join = () => {
    const [index, setIndex] = useState(0)

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setIndex((prevIndex) => (prevIndex + 1) % components.length)
    //   }, 6000)
  
    //   return () => {
    //     clearInterval(interval)
    //   }
    // }, [])

    const handleDotClick = (clickedIndex) => {
      setIndex(clickedIndex);
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      beforeChange: (_, next) => {
        setIndex(next)
      },
      appendDots: (dots) => (
        <ul style={{position: "relative", alignItems: "center", justifyItems: "center", padding:"0px 10px 10px 0px",margin:"10px 0px", }}>{dots}
        </ul>
      ),
      customPaging: (i) => (
       
        <div
        className=""
        style={{
          height: "17px",
         
          width: "17px",
          borderRadius: "10px",
          backgroundColor: i === index ? "#0df5e3" : "#0f185b",
          // width: i === index ? "35px" : "20px",
          transition: "all 0.5s",

        }}
      ></div>
       
      ),
    };

  return (
    <main  className='join-main my-20 mx-[5%] h-[60%] '>
      <div className='flex-col justify-center items-center'>
        <div className=' overflow-hidden'>
          <Slider {...settings}>
          {components.map((imgs,index)=>{
            return(
              <div key={index}>{imgs}</div>
            )
          })}

          </Slider>
        </div>
          {/* <div className='flex flex-row w-screen h-auto justify-center  items-center' style={{marginTop:"-100px",marginLeft:"-50px"}}>
            <DotIndicator index={index} onClick={handleDotClick} />
          </div> */}
      </div>
    </main>
  )
}

export default Join
