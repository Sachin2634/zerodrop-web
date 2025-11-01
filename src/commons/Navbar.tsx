import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='h-16 w-full bg-white fixed flex justify-between items-center shadow-lg'>
        <img src="/images/logo.png" alt="Zerodrop" className='h-20 mx-4' />
        <div className='flex gap-4 mr-8'>
          <div className='flex gap-8 items-center'>
            <div>Home</div>
            <div>Plans</div>
            <div>About Us</div>
            <div>Contact</div>
          </div>
          <div className='flex gap-2 ml-4'>
            <button className='border-[#419E5B] border-2 px-4 py-0.5 rounded-full'>Sign In</button>
            <button className='bg-[#419E5B] text-white px-4 py-0.5 rounded-full'>Try Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar