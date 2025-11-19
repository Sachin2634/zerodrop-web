import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { IoWaterOutline } from 'react-icons/io5'
import { LuLeaf, LuShield } from 'react-icons/lu'

const CardsData = [
  {
    icon: <IoWaterOutline size={32}/>,
    title: "1 Liter = Entire Car",
    description: "Our revolutionary waterless formula cleans your entire vehicle using just 1 liter of solution."
  },
  {
    icon: <LuLeaf size={32}/>,
    title: "100% Eco-Friendly",
    description: "Biodegradable, non-toxic formula that's safe for the environment and your family."
  },
  {
    icon: <IoMdTime size={32}/>,
    title: "Save Time & Water",
    description: "No water waste, no mess. Professional cleaning in 30 minutes at your location."
  },
  {
    icon: <LuShield size={32}/>,
    title: "Paint Protection",
    description: "Advanced nano-coating technology that protects and enhances your car's finish."
  }
]

const WhyChoose = () => {
  return (
    <div className=' flex flex-col items-center p-16'>
        <div className='mb-8 text-4xl font-bold'>Why Choose ZeroDrop?</div>
        <div className='mb-16 text-lg text-center text-gray-600'>Revolutionary waterless technology that delivers professional results while<br /> protecting our environment.</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
            {CardsData.map((card, index) => (
                <div key={index} className='flex flex-col items-center text-center w-64 h-60 px-6 py-4 rounded-2xl gap-4 shadow-lg'>
                    <div className='p-3 rounded-full bg-[#41B3A3]/10'>{card.icon}</div>
                    <div className='font-light'>{card.title}</div>
                    <div className='font-light'>{card.description}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhyChoose