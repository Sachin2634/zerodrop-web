import React from 'react'

interface ContactCardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
}


const ContactCards = ({ icon, heading, description }: ContactCardProps) => {
  return (
    <div className='flex flex-col gap-3 border border-gray-300 px-10 py-6 items-center w-60 rounded-xl shadow-lg'>
      <div className='text-white rounded-full p-3 bg-[#419E5B]'>{icon}</div>
      <div className='text-sm text-[#237039] font-semibold'>{heading}</div>
      <div className='text-xs text-center leading-5 font-light'>{description}</div>
    </div>
  )
}

export default ContactCards