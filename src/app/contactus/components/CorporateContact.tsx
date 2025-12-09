import React from 'react'
import { LuBuilding2, LuGlobe, LuUsers } from 'react-icons/lu'

const CorporateContact = () => {
  return (
    <div className='rounded-2xl border border-gray-300 shadow-lg p-6'>
      <div className='text-[#237039] text-lg'>Corporate Partnerships</div>
      <div className='text-gray-500 text-sm'>Interested in bulk services or partnerships?</div>
      <div className='text-sm mt-6 gap-4 flex flex-col'>
        <div className='flex gap-2 items-center'>
          <LuBuilding2 className='text-green-600 text-base'/> Fleet & Corporate Services
        </div>
        <div className='flex gap-2 items-center'>
          <LuUsers className='text-blue-500 text-base'/> Residential Society Partnerships
        </div>
        <div className='flex gap-2 items-center'>
          <LuGlobe className='text-[#237039] text-base'/> Franchise Opportunities
        </div>
      </div>
      <button className='mt-8 py-2 w-full text-center text-[#237039] font-semibold border border-green-600 rounded-lg text-xs hover:shadow-md transition duration-300'>
        Request Partnership Info
      </button>
    </div>
  )
}

export default CorporateContact