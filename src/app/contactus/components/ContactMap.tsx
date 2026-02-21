import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'

const ContactMap = () => {
  return (
    <div className='border border-gray-300 rounded-xl m-40 p-6 mt-8 mb-16'>
      <div className='text-[#237039] text-lg'>Our Location</div>
      <div className='text-sm text-gray-500 leading-5 mt-1'>Visit our headquarters in Austin, Texas</div>
      <div className='p-16 mt-6 bg-[#4abcb0]/10 gap-3 items-center flex flex-col rounded-lg'>
        <IoLocationOutline size={48} className='text-[#419E5B]' />
        <div className='text-sm'>Interactive map would be displayed here</div>
        <div className='text-sm text-gray-500'>123 Green Tech Boulevard, EcoTech Center, Floor 15, Austin, TX 78701</div>
      </div>
    </div>
  )
}

export default ContactMap