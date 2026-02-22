import FeatureCards from '@/commons/FeatureCards'
import React from 'react'
import { LuHeart, LuLeaf, LuLightbulb, LuShield } from 'react-icons/lu'

let CoreValuesData = {
    topHead: "Our Core Values",
    titleline1: "Guiding Principles That Drive Us",
    titleline2: "Our commitment to excellence, sustainability, and customer satisfaction is rooted in our core values.",
    cardsData: [
    {
        icon: <LuLeaf size={32}/>,
        title: "Environmental First",
        description: "Every decision we make puts environmental sustainability at the forefront."
    },
    {
        icon: <LuShield size={32}/>,
        title: "Quality Excellence",
        description: "Premium service standards that exceed customer expectations every time."
    },
    {
        icon: <LuHeart size={32}/>,
        title: "Customer Care",
        description: "Building lasting relationships through exceptional service and transparency."
    },
    {
        icon: <LuLightbulb size={32}/>,
        title: "Innovation",
        description: "Continuously developing cutting-edge eco-friendly cleaning technologies."
    }
]
}

const CoreValues = () => {
  return (
    <FeatureCards props={CoreValuesData} />
  )
}

export default CoreValues