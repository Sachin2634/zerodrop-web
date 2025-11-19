import React from 'react'
import { BsHouseFill } from 'react-icons/bs'
import { FaBuilding, FaHospital, FaHotel, FaTruckMoving } from 'react-icons/fa'
import { FaBuildingNgo, FaSchool } from 'react-icons/fa6'
import { GoVerified } from 'react-icons/go'

const CardsData = [
  {
    type: "Corporate",
    image: <FaBuilding size={20}/>,
    name: "Green Wheels Inc."
  },
  {
    type: "Residential",
    image: <BsHouseFill size={20}/>,
    name: "Sunnyvale Apartments"
  },
  {
    type: "Fleet",
    image: <FaTruckMoving size={20}/>,
    name: "Rapid Delivery Co."
  },
  {
    type: "Government",
    image: <GoVerified size={20}/>,
    name: "City of EcoVille"
  },
  {
    type: "NGO",
    image: <FaBuildingNgo size={20}/>,
    name: "Clean Earth Org."
  },
  {
    type: "Educational",
    image: <FaSchool size={20}/>,
    name: "Eco University"
  },
  {
    type: "Hospitality",
    image: <FaHotel size={20}/>,
    name: "GreenStay Hotels"
  },
  {
    type: "Healthcare",
    image: <FaHospital size={20}/>,
    name: "Wellness Medical Center"
  }
]

const TrustedOrgs = () => {
  return (
   <div className=' flex flex-col items-center p-16 bg-[#41B3A3]/10'>
        <div className='mb-8 text-4xl font-bold'>Trusted by Leading Organizations</div>
        <div className='mb-16 text-lg text-center text-gray-600'>From corporate fleets to residential societies, we're the preferred choice for eco-<br /> conscious cleaning.</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center'>
            {CardsData.map((card, index) => (
                <div key={index} className='flex w-72 bg-white h-24 px-6 py-4 rounded-xl gap-4 shadow-md items-center'>
                    <div className='p-3 rounded-full'>{card.image}</div>
                    <div className='space-y-1'>
                        <div className='font-semibold'>{card.name}</div>
                        <div className='font-semibold bg-[#41B3A3] max-w-fit px-2 py-0.5 text-xs text-white rounded-lg'>{card.type}</div>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex mt-16 space-x-48 text-center text-gray-700'>
            <div className='space-y-2'>
                <div className='text-4xl font-bold'>500+</div>
                <div>Corporate Clients</div>
            </div>
            <div className='space-y-2'>
                <div className='text-4xl font-bold'>50,000+</div>
                <div>Cars Cleaned</div>
            </div>
            <div className='space-y-2'>
                <div className='text-4xl font-bold'>100,000 L</div>
                <div>Water Saved</div>
            </div>
        </div>
    </div>
  )
}

export default TrustedOrgs