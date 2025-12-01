import React from 'react'

const ContactHeader = () => {
  return (
    <div className='flex flex-col items-center py-16 bg-linear-to-br from-yellow-50 via-blue-50/50 to-blue-100/50'>
        <div className='px-2 py-0.5 mb-6 rounded-full bg-[#4cabc0] text-xs text-white'>💬 We're Here to Help</div>
        <div className='text-5xl font-bold text-[#237039]'>Get in Touch</div>
        <div className="mb-6 text-5xl font-bold text-[#4cabc0]">With EcoClean Pro</div>
        <div className='text-gray-800 mb-6 text-center'>
            Have questions about our waterless cleaning services? Want to discuss corporate<br /> partnerships? We'd love to hear from you and help you go green.
        </div>
        <div className='space-x-3'>
            <button className='rounded-full px-6 py-2 bg-[#419E5B] text-white'>Book your Trial</button>
            <button className='rounded-full px-6 py-2 text-[#237039] border border-[#419E5B]'>Call Now</button>
        </div>
    </div>
  )
}

export default ContactHeader