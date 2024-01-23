import Hero from "./Hero"
import Join from "./Join"
import Vision from "./Vision"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Socials from "./Socials"
import Script from "next/script"

export const metadata = {
  title: 'Sicu Aura',
  description: 'Home Page for Sicu Aura',
}


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
