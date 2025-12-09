import React from 'react'

const QuesAnsFAQ = [
    {
        ques_field: "Contact",
        question: "How do I schedule a service?",
        answer: "You can book through our website, mobile app, or by calling our 24/7 customer service line."
    },
    {
        ques_field: "Contact",
        question: "What areas do you serve?",
        answer: "We currently operate in 50+ cities across the United States. Check our service area map for coverage."
    },
    {
        ques_field: "Contact",
        question: "Is your cleaning solution safe for all car types?",
        answer: "Yes! Our eco-friendly formula is safe for all paint types, including premium and luxury vehicles."
    },
]

interface FAQProps {
  field: string;
}

const FAQ = ({ field }: FAQProps) => {
  return (
    <div className='rounded-2xl border border-gray-300 shadow-lg p-6 m-16'>
      <div className='text-[#237039] text-lg'>Frequently Asked Questions</div>
      <div className='text-gray-500 text-sm'>Quick answers to common questions</div>
      { QuesAnsFAQ.map((string, idx) => {
        if(string.ques_field.toLowerCase() === field.toLowerCase()){
          return (
            <div key={idx} className='mt-4 space-y-2'>
              <div className='text-sm font-semibold text-[#237039]'>{string.question}</div>
              <div className='text-xs text-gray-600'>{string.answer}</div>
            </div>
          )
        }
        return null;
      })}
    </div>
  )
}

export default FAQ