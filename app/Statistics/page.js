import Navbar from "../Navbar"
import Image from "next/image"
import Socials from "../Socials"
import Market1 from '@/public/market1.png'
import IndiaGlow from '@/public/indiaglow.svg'
import NumofCases from '@/public/numofcases.png'
import AccidentalDeath from '@/public/AccidentalDeath.png'
import Footer from "../Footer"

export const metadata = {
  title: 'Statistics',
  description: 'Home Page for Sicu Aura',
}

export default function Statistics() {
  return (
    <>
    <Navbar/>
    <div >
        <Socials top="40"/>
      </div>
    <main className="flex flex-col w-screen h-auto items-center justify-center gap-2">
      <h1 className=" font-Inknut text-4xl font-semibold mt-28">
        Market Research
      </h1>
      <section className="flex flex-row justify-evenly items-center mt-24 mx-28 gap-12">
        <div className="lg:flex gap-12 mx-6 items-center">
          <div className="lg:shrink-0 mb-10 flex justify-center">
        <Image 
          src={Market1}
          alt='market research img'
          className=" object-coverh-full shrink-0"
          style={{borderRadius:"10px",boxShadow:"1px 1px 20px #0DF5E3"}}
        />

          </div>
        <div className=" flex flex-col gap-12 mb-16 mx-10">
          <h2 className=" font-Inknut  text-3xl">A Giant Market is going to experience a fresh innovation</h2>
          <p className=" font-Inknut font-normal text-sm tracking-widest">
          {`India has 1.2 billion mobile subscribers, of which 1 billion are smartphone users. This means that our application has the potential to reach a sizeable market of 100 million people if we can capture just 10% of the smartphone user base.`}
          <p className="py-10">{`  No direct competitors are in th e market. Some companies are in the market that are working on the same type of issues, but they are not that much efficient or so much expensive.         `}</p>
          </p>
        </div>
        </div>
      </section>
      <h1 className=" font-Inknut text-4xl font-semibold mt-32">
        Crime Statistics of India
      </h1>
      <section className="flex flex-row flex-wrap-reverse justify-evenly items-center my-24 mx-10 gap-72">
        <div className=" lg:flex flex-col gap-10">
          <h2 className="font-Inknut font-semibold text-4xl my-10">Top States in Crimes</h2>
            <ul className="list-disc space-y-6 font-Inknut font-normal my-20">
              <li>{`Kerala (Crime rate: 1477.2)`}</li>
              <li>{`Delhi (Crime rate: 1329.4)`}</li>
              <li>{`Maharashtra (Crime rate: 1074.2)`}</li>
              <li>{`Rajasthan (Crime rate: 985.7)`}</li>
              <li>{`Uttar Pradesh (Crime rate: 907.0)`}</li>
              <li>{`Bihar (Crime rate: 882.4)`}</li>
              <li>{`West Bengal (Crime rate: 856.0)`}</li>
              <li>{`Madhya Pradesh (Crime rate: 798.0)`}</li>
              <li>{`Assam (Crime rate: 753.0)`}</li>
            </ul>
          <p className="font-Inknut font-extralight text-sm mb-12 text-end"> Based on Year of 2022*</p>
        </div>
        <div className="lg:flex-shrink-0">

        <Image
            src={IndiaGlow}
            alt="Map of india"
            
            style={{borderRadius:"10px",boxShadow:"1px 1px 20px #0DF5E3"}}
        />
        </div>
      </section>
      
      <Image 
        src={NumofCases}
        alt="Number of Rape cases"
       className="w-[800px] h-[500px]"
        
      />
      <Image 
        src={AccidentalDeath}
        alt="Accidental Death Graph"
        className="pt-40"
      />
      <Footer />
    </main>
    </>
  )
}
