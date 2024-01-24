import React from 'react'
import Image from 'next/image'
import OurVision from '@/public/Vision.svg'

const Vision = () => {
  return (
    <main className='w-screen h-auto mb-40 mt-40 flex flex-col-reverse md:flex-row justify-around items-center vision'>
        <section className='flex flex-col gap-4 w-10/12 md:w-1/3'>
            <p className=' font-Inknut font-normal text-lg text-justify'>
            {`Imagine a world where fear takes a backseat, replaced by a comforting sense of security. Where lives flourish unburdened by the anxieties of crime and accidents. Where technology seamlessly integrates with our lives, not just making them easier but actively safeguarding them. This is the vision of Sicu-aura.`}
            </p>
            <p className=' font-Inknut font-normal text-lg text-justify'>
            {`Sicu-aura is not just a company, it's a movement. We believe that by working together, we can build a safer and easier world for everyone. A world where communities thrive, families feel protected, and individuals live with a sense of peace and freedom.`}
            </p>
            
        </section>
        <Image src={OurVision} alt=" Our Vision " />
    </main>
  )
}

export default Vision