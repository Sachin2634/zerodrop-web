import React from 'react'
import AboutUsHeader from './components/AboutUsHeader'
import CoreValues from './components/CoreValues'
import ReadySection from '@/commons/ReadySection'
import OurStory from './components/OurStory'
import BreakthroughTech from './components/BreakthroughTech'
import MeetOurTeam from './components/MeetOurTeam'

const AboutUs = () => {
  return (
    <div>
      <AboutUsHeader />
      <OurStory />
      <CoreValues />
      <BreakthroughTech />
      <MeetOurTeam />
      <ReadySection />
    </div>
  )
}

export default AboutUs