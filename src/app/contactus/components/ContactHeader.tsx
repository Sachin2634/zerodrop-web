import Header from '@/commons/Header'
import React from 'react'

let contactHeaderData = {
  topHead: "💬 We're Here to Help",
  titleline1: "Get in Touch",
  titleline2: "With EcoClean Pro",
  description: "Have questions about our waterless cleaning services? Want to discuss corporate partnerships? We'd love to hear from you and help you go green.",
  buttons: true
}

const ContactHeader = () => {
  return (
        <Header props={contactHeaderData} />
  )
}

export default ContactHeader