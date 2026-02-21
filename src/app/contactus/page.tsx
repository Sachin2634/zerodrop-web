import React from 'react'
import ContactHeader from './components/ContactHeader'
import MessageForm from './components/MessageForm'
import FAQ from './components/FAQ'
import CorporateContact from './components/CorporateContact'
import ContactCards from './components/ContactCards'
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { BsClock, BsTelephone } from 'react-icons/bs'
import ContactMap from './components/ContactMap'

let contactData = [
  {
    "icon": <IoLocationOutline size={24}/>,
    "heading": "Visit Us",
    "description": "123 Green Tech Boulevard, EcoTech Center, Floor 15, Austin, TX 78701"
  },
  {
    "icon": <BsTelephone size={24}/>,
    "heading": "Call Us",
    "description": "+1-(800)-123-CLEANN,  +1-(800)-123-2533,  Available-24/7"
  },
  {
    "icon": <IoMailOutline size={24}/>,
    "heading": "Email Us",
    "description": "hello@ecocleanpro.com, support@ecocleanpro.com, Response within 2 hours"
  },
  {
    "icon": <BsClock size={24}/>,
    "heading": "Business Hours",
    "description": "Mon - Fri: 7 AM - 8 PM, Saturday: 8 AM - 6 PM, Sunday: 9 AM - 5 PM"
  }
]

const ContactUs = () => {
  return (
    <div>
      <ContactHeader />
      <div className='flex w-full py-16 justify-center gap-8 flex-wrap'>
        {contactData.map((contact, index) => (
          <ContactCards key={index} props={contact}/>
        ))}
      </div>
      <div className='flex justify-center space-x-12 space-y-6'>
        <MessageForm />
        <div className='flex flex-col gap-8'>
          <FAQ field= "contact"/>
          <CorporateContact />
        </div>
      </div>
      <ContactMap />
    </div>
  )
}

export default ContactUs