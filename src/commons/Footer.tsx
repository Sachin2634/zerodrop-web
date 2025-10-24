import React from 'react'

const Footer = () => {
  return (
    <div className='p-8 pt-4 w-full bg-[#419E5B] text-white bottom-0 flex justify-between items-center '>
      <div className='flex flex-col pl-4'>
        <div>
            <img src="/images/logo-white.png" alt="Zerodrop" className='h-32' />
        </div>
        <div>Revolutionary waterless car cleaning<br /> that saves our planet,<br /> one car at a time.</div>
        <div className='mt-4'>
            <div>hello@zerodrop.com</div>
            <div>+91 12345 67890</div>
        </div>
      </div>
      <div className='flex gap-32 mx-10 mt-4'>
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
      </div>
    </div>
  )
}

export default Footer