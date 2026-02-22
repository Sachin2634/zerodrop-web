import React from 'react'

const FeatureCards = ({props}: any) => {
  return (
    <div className=' flex flex-col items-center p-16'>
        <div className='mb-8 text-4xl font-bold'>{props.topHead}</div>
        <div className='mb-16 text-lg text-center text-gray-600'>{props.titleline1}<br />{props.titleline2}</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
            {props.cardsData.map((card: any, index: number) => (
                <div key={index} className='flex flex-col items-center text-center w-64 h-60 px-6 py-4 rounded-2xl gap-4 shadow-lg'>
                    <div className='p-3 rounded-full bg-[#41B3A3]/10 text-[#4cabc0]'>{card.icon}</div>
                    <div className='font-light'>{card.title}</div>
                    <div className='font-light'>{card.description}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards