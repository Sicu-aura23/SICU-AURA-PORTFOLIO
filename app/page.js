import Hero from "./Hero"
import Join from "./Join"
import Vision from "./Vision"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Socials from "./Socials"
import Script from "next/script"

export const metadata = {
  title: 'Sicu-Aura : Your one stop safety solutions from India',
  description:
  "Sicu-aura is a pre-revenue company which is working so hard to bring innovative technical solution as a Next Generation SoS. Our aim is to reduce rape cases, accidental death cases, river death cases, harrassment and bullying cases by 90%. We are also dedicated to bring out and serve justice to unregister cases due to faceloss. There are many more features. So stay tuned to our social media to stay updated"
  ,
};


export default function Home() {
  return (
    <>

        <Hero />
        <Join />
        <Vision />
        <Footer />
    </>
  )
}
