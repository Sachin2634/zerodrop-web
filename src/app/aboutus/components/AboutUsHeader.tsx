import Header from '@/commons/Header'
import React from 'react'

let aboutUsHeaderData = {
  topHead: "🌱 Since 2019",
  titleline1: "Revolutionizing Car Care",
  titleline2: "One Drop at a Time",
  description: "We're on a mission to eliminate water waste in car cleaning while delivering exceptional results. Our breakthrough technology proves that premium care and environmental responsibility go hand in hand.",
  buttons: false
}

const AboutUsHeader = () => {
  return (
    <Header props={aboutUsHeaderData} />
  )
}

export default AboutUsHeader