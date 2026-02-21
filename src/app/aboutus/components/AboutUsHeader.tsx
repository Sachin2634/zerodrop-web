import React from 'react'

const AboutUsHeader = () => {
  return (
    <div className='flex flex-col items-center py-16 bg-linear-to-br from-yellow-50 via-blue-50/50 to-blue-100/50'>
        <div className='px-2 py-0.5 mb-6 rounded-full bg-[#4cabc0] text-xs text-white'>🌱 Since 2019</div>
        <div className='text-5xl font-bold text-[#237039]'>Revolutionizing Car Care</div>
        <div className="mb-6 text-5xl font-bold text-[#4cabc0]">One Drop at a Time</div>
        <div className='text-gray-800 mb-6 text-center'>
            We're on a mission to eliminate water waste in car cleaning while delivering<br /> 
            exceptional results. Our breakthrough technology proves that premium care and <br />
            environmental responsibility go hand in hand.
        </div>
        <div className='space-x-3'>
            <button className='rounded-full px-6 py-2 bg-[#419E5B] text-white'>Book your Trial</button>
            <button className='rounded-full px-6 py-2 text-[#237039] border border-[#419E5B]'>Call Now</button>
        </div>
    </div>
  )
}

export default AboutUsHeader