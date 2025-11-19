import Image from 'next/image'
import React from 'react'
import { PiPlantDuotone, PiPlantFill } from 'react-icons/pi'
import { SiTicktick } from 'react-icons/si'

const HeroSection = () => {
  return (
    <div className="flex p-16 bg-[#419E5B]/10 justify-between">
            
            <div className="w-1/3 space-y-10">  
              <div>
                <div className="text-6xl font-bold text-[#237039]">Clean Cars, </div>
                <div className="text-6xl font-bold text-[#4cabc0]">Save Planet </div>
              </div>
              <div className=" text-gray-600">Experience premium waterless car cleaning that uses just 1 liter to clean your entire vehicle. Eco-friendly, convenient, and delivered right to your doorstep.</div>
              <div className="space-x-4">
                <button className="bg-[#419E5B] border-2 border-[#419E5B] text-white px-6 py-2 rounded-full">Start 7-Day Trial</button>
                <button className="border-[#419E5B] border-2 px-6 py-2 rounded-full">View Plans</button>
              </div>
              <div className="flex text-sm space-x-8">
                <div className="flex space-x-2 items-center">
                  <SiTicktick className="text-[#419E5B]" />
                  <div>No Water Waste</div>
                </div>
                <div className="flex space-x-2 items-center">
                  <SiTicktick className="text-[#419E5B]" />
                  <div>100% biodegradable</div>
                </div>
                <div className="flex space-x-2 items-center">
                  <SiTicktick className="text-[#419E5B]" />
                  <div>30-min service</div>
                </div>
              </div>
              <div className="w-fit text-xs px-5 py-2 flex rounded-full bg-[#4cabc0] text-white font-bold">
                <PiPlantDuotone className="mr-2 text-white text-lg" /> Revolutionary Waterless Technology
              </div>
            </div>
            <div className="w-[600px] h-[450px] overflow-hidden rounded-2xl">
              <Image src="/images/home-hero.png" alt="Hero Image" width={600} height={600}  />
            </div>
          </div>
  )
}

export default HeroSection