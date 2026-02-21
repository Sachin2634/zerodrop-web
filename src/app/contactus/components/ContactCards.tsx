import React from 'react'

const ContactCards = ({props}: any) => {
  return (
    <div className='flex flex-col gap-3 border border-gray-300 px-10 py-6 items-center w-60 rounded-xl shadow-lg'>
      <div className='text-white rounded-full p-3 bg-[#419E5B]'>{props.icon}</div>
      <div className='text-sm text-[#237039] font-semibold'>{props.heading}</div>
      <div className='text-xs text-center leading-5 font-light'>{props.description}</div>
    </div>
  )
}

export default ContactCards