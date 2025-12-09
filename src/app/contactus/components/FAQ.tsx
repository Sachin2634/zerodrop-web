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

const FAQ = (field: string) => {
  return (
    <div className='rounded-2xl border border-gray-300 shadow-lg p-6 m-16'>
      <div>Frequently Asked Questions</div>
      <div>Quick answers to common questions</div>
      {/* { QuesAnsFAQ.map((string, idx) => {

      })} */}
    </div>
  )
}

export default FAQ