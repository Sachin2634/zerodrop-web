import React from 'react'
import ContactHeader from './components/ContactHeader'
import MessageForm from './components/MessageForm'
import FAQ from './components/FAQ'
import CorporateContact from './components/CorporateContact'

const ContactUs = () => {
  return (
    <div>
      <ContactHeader />
      <div className='flex m-16'>
        <MessageForm />
        <div>
          <FAQ field= "contact"/>
          <CorporateContact />
        </div>
      </div>
    </div>
  )
}

export default ContactUs