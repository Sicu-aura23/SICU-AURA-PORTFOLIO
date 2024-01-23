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
  `Unleashing a Safer World: Sicu-aura's Revolutionary Safety Tech (Pre-Launch!)
  Empowering Freedom Through Innovation: Sicu-aura, a soon-to-launch revolutionary startup, is pioneering cutting-edge safety technologies aimed at transforming our world. We're building solutions to dramatically reduce crime and accidental deaths, tackling issues like rape, river drownings, and ragging head-on. Our ambitious goal? A 90% reduction in non-preplanned crimes and a future where everyone can experience true freedom and security.
 
  Stay Tuned for Unveiling: While details remain under wraps until our official launch, we're driven by a passionate team of creatives and tech wizards united by a common vision. We're not just building tools, we're building a safer tomorrow, for all.
 
  Join the Movement: Follow Sicu-aura for exclusive updates, early access opportunities, and a glimpse into the future of safety. Be part of the change and spread the word: All for one & Sicu-aura for all!`
  
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
