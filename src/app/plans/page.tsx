import { time } from 'console';
import React from 'react'

const CardsData = [
  { 
    time: "Monthly",
    type: "Basic",
    price: "$19.99/month",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Monthly",
    type: "Standard",
    price: "$34.99/month",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Monthly",
    type: "Premium",
    price: "$49.99/month",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
  { 
    time: "Quarterly",
    type: "Basic",
    price: "$49.99/month",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Quarterly",
    type: "Standard",
    price: "$79.99/month",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Quarterly",
    type: "Premium",
    price: "$119.99/month",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
  { 
    time: "Yearly",
    type: "Basic",
    price: "$119.99/month",
    features: [
      "1 car cleaning per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Yearly",
    type: "Standard",
    price: "$139.99/month",
    features: [
      "2 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
  {
    time: "Yearly",
    type: "Premium",
    price: "$159.99/month",
    features: [
      "3 car cleanings per month",
      "Waterless wash & wax",
      "Interior vacuum",
      "Tire shine",
      "24/7 customer support",
      "Flexible scheduling"
    ],
    image: "https://placehold.net/100x100.svg",
  },
];

const Plans = () => {
    return (
    <div className='pb-20 flex flex-col items-center p-16'>
        <div className='text-5xl font-bold text-[#237039]'>Choose Your</div>
        <div className='mb-8 text-5xl font-bold text-[#4cabc0]'>EcoClean Plan</div>
        <div className='mb-16 text-lg text-center text-gray-600'>Flexible subscription plans designed to keep your car spotless while protecting the <br /> environment. All plans include our signature 1-liter waterless cleaning technology.</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {CardsData.map((card, index) => (
                <div key={index} className='flex flex-col items-center text-center w-64 px-6 py-4 rounded-2xl gap-4 shadow-lg'>
                    <div className='p-2 rounded-full bg-[#41B3A3]/10'><img src={card.image} alt={card.type} className="rounded-full w-12 h-12" /></div>
                    <div className='font-bold'>{card.type}</div>
                    {/* <div className='font-bold bg-[#41B3A3] text-white text-xs px-2 py-0.5 rounded-full'>{card.organization}</div> */}
                    <div className='font-light'>{card.price}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans