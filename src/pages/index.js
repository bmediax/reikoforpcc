// Technologies
import React from "react"
import '../styles/homepage.scss'

// Style
import Layout from '../layout'

// Sections
import SliderSection from '../components/sections/SliderSection'
import MeetreikoSection from '../components/sections/MeetreikoSection'
import PrioritiesSection from '../components/sections/PrioritiesSection'
import EndorsementsSection from '../components/sections/EndorsementsSection'
import EventsSection from '../components/sections/EventsSection'
import GetinvolvedSection from '../components/sections/GetinvolvedSection'

const IndexPage = () => {
  return (
    <Layout title="Homepage">
      <SliderSection />
      <MeetreikoSection />
      <PrioritiesSection />
      <EndorsementsSection />
      <EventsSection />
      <GetinvolvedSection />
    </Layout>
  )
}

export default IndexPage
