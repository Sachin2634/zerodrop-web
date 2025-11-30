import React from 'react'

const CardsData = [
  {
    name: "Premium Wax Coating",
    description: "Enhance your car's shine and protect the paint with our premium wax coating service.",
    price: "$10",
  },
    {
    name: "Headlight Restoration",
    description: "Restore clarity to foggy or yellowed headlights for improved visibility and appearance.",
    price: "$20",
  },
  {
    name: "Interior Deep Clean",
    description: "Thorough cleaning of your car's interior, including seats, carpets, and dashboard.",
    price: "$15",
  },
  {
    name: "Engine Detailing",
    description: "Professional cleaning and detailing of your car's engine for optimal performance.",
    price: "$30",
  },
];

const Addons = () => {
  return (
    <div className='py-12 bg-gray-100 justify-items-center'>
        <div className='text-[#237039] text-3xl font-bold'>Optional Add-ons</div>
        <div className='text-gray-600 mt-4 mb-8'>Enhance your subscription with these premium services</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20'>
                {CardsData.map((addon, index) => (
                    <div key={index} className='bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center'>
                        <div className='text-xl text-[#237039] mb-2'>{addon.name}</div>
                        <div className='text-2xl text-[#237039] font-bold mb-4'>{addon.price}</div>
                        <div className='text-gray-600 text-sm mb-2'>{addon.description}</div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Addons