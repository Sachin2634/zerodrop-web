import FeatureCards from '@/commons/FeatureCards'
import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { IoWaterOutline } from 'react-icons/io5'
import { LuLeaf, LuShield } from 'react-icons/lu'

let WhychooseData = {
  topHead: "Why Choose ZeroDrop?",
  titleline1: "Revolutionary waterless technology that delivers professional results while", 
  titleline2: "protecting our environment.",
  cardsData: [
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
}

const WhyChoose = () => {
  return (
    <FeatureCards props={WhychooseData} />
  )
}

export default WhyChoose