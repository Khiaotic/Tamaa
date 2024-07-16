import React from 'react'
import Section from './Section'
import Heading from './Heading'
// import {TamaBaby, TamaSeptum, TamaLogoSide, TamaLogoMiddle} from "../assets"
// import {TamaHero} from "../../public/TamaDownloads/TamaHero.jpg"



const downloadables = () => {
  return (
    <Section id="assets">
        <div className="container">
            <div className='flex justify-center items-center'>
            <Heading title="Downloadable Assets" text="usable assets for content creation and posting"/>
            </div>

            <div className="relative">
<div>
    <div  className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-[1/10] rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className='w-full h-full md:w-3/5 xl:w-auto'>

               <img 
               src='../../public/TamaDownloads/TamaHero.jpg'
               width={500}
               height={500}
               />
               <img 
               className='object-cover md:object-right'
               src='../../public/TamaDownloads/tamaLogoNameMiddle.png'
               width={500}
               height={500}
               />
               </div>
    </div>
            <div>
            </div>
</div>
            </div>
        </div>
      
    </Section>
  )
}

export default downloadables

