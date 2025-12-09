import React from 'react'
import ContactHeader from './components/ContactHeader'
import MessageForm from './components/MessageForm'
import FAQ from './components/FAQ'
import CorporateContact from './components/CorporateContact'

const ContactUs = () => {
  return (
    <div>
      <ContactHeader />
      <div className='flex justify-center my-16 space-x-12 space-y-4'>
        <MessageForm />
        <div className='flex flex-col gap-8'>
          <FAQ field= "contact"/>
          <CorporateContact />
        </div>
      </div>
    </div>
  )
}

export default ContactUs