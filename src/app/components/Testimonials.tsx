import React from 'react'

const CardsData = [
  {
    rating: 5,
    review: "ZeroDrop transformed my car! It looks brand new, and I love that it's eco-friendly. Highly recommend their service.",
    userimage: "https://placehold.net/avatar.svg",
    name: "Sarah L.",
    organization: "Green Wheels Co.",
    location: "San Francisco, CA"
  },
  {
    rating: 4,
    review: "I appreciate ZeroDrop's commitment to the environment. My car looks great, and I feel good about the waterless cleaning process.",
    userimage: "https://placehold.net/avatar-2.svg",
    name: "James M.",
    organization: "Eco Transport Ltd.",
    location: "Austin, TX"
  },
  {
    rating: 5,
    review: "Fast, efficient, and environmentally responsible. ZeroDrop is my go-to for car cleaning now!",
    userimage: "https://placehold.net/avatar-3.svg",
    name: "Emily R.",
    organization: "Clean Ride Inc.",
    location: "Seattle, WA"
  },
];

const Testimonials = () => {
  return (
    <div className='pb-20 flex flex-col items-center p-16'>
        <div className='mb-8 text-4xl font-bold'>Why Choose ZeroDrop?</div>
        <div className='mb-16 text-lg text-center text-gray-600'>Revolutionary waterless technology that delivers professional results while<br /> protecting our environment.</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {CardsData.map((card, index) => (
                <div key={index} className='flex flex-col items-center text-center w-64 px-6 py-4 rounded-2xl gap-4 shadow-lg'>
                    <div className='p-2 rounded-full bg-[#41B3A3]/10'><img src={card.userimage} alt={card.name} className="rounded-full w-12 h-12" /></div>
                    <div className='font-bold'>{card.name}</div>
                    <div className='font-bold bg-[#41B3A3] text-white text-xs px-2 py-0.5 rounded-full'>{card.organization}</div>
                    <div className='font-light'>{card.review}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials