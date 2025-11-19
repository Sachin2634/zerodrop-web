import React from 'react'
import { FaStar } from 'react-icons/fa'
import Divider from './Divider'

const Footer = () => {
  return (
    <div className='p-8 px-16 pt-4 gap-8 w-full bg-[#419E5B] text-white bottom-0 flex flex-col'>
      
      <div className='w-full flex justify-between items-center mt-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-bold'>Services</h1>
        <div>7-Day Trial</div>
        <div>Subscription Plans</div>
        <div>Corporate Services</div>
        <div>Fleet Management</div>
        <div>Society Partnerships</div>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-bold'>Company</h1>
        <div>About Us</div>
        <div>Contact</div>
        <div>Careers</div>
        <div>Press & Media</div>
        <div>Sustainability</div>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-bold'>Support</h1>
        <div>Customer Portal</div>
        <div>Help Center</div>
        <div>Service Areas</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
      </div>
      
      <div className='flex flex-col'>
        <div>
            <img src="/images/logo-white.png" alt="Zerodrop" className='h-32' />
        </div>
        <div>Revolutionary waterless car cleaning<br /> that saves our planet,<br /> one car at a time.</div>
        <div className='mt-4'>
            <div>hello@zerodrop.com</div>
            <div>+91 12345 67890</div>
        </div>
      </div>
      </div>
      <Divider />
      <div className='w-full flex justify-between items-center mt-4 px-8'>
        <div className='flex flex-col items-center bg-white shadow-white px-6 py-4 rounded-lg hover:scale-115 hover:shadow-sm transition-transform duration-500'>
          <div className='text-2xl font-bold text-[#237039]'>2.5M+ Liters</div>
          <div className='text-black'>Water Saved</div>
        </div>
        <div className='flex flex-col items-center bg-white shadow-white px-6 py-4 rounded-lg hover:scale-115 hover:shadow-sm transition-transform duration-500'>
          <div className='text-2xl font-bold text-[#237039]'>567 Tons</div>
          <div className='text-black'>CO2 Reduced</div>
        </div>
        <div className='flex flex-col items-center bg-white shadow-white px-6 py-4 rounded-lg hover:scale-115 hover:shadow-sm transition-transform duration-500'>
          <div className='text-2xl font-bold text-[#237039]'>5K+ Cars</div>
          <div className='text-black'>Cleaned</div>
        </div>
        <div className='flex flex-col items-center bg-white shadow-white px-6 py-4 rounded-lg hover:scale-115 hover:shadow-sm transition-transform duration-500'>
          <div className='flex items-center gap-2 text-2xl font-bold text-[#237039]'>4.8/5 <FaStar className='text-yellow-400'/></div>
          <div className='text-black'>Customer Rating</div>
        </div>
      </div>
    </div>
  )
}

export default Footer