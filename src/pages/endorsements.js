import React from 'react'
import Layout from '../layout'
import SectionLayout from '../layout/SectionLayout'
import EndorsementsModule from '../components/modules/EndorsementsModule'
import GetinvolvedSection from '../components/sections/GetinvolvedSection'
import '../styles/GetinvolvedSection.scss'

// markup
const Endorsements = () => {
  return (
    <Layout title="Endorsements">
        <div id="cover">
            <h1> Endorsements </h1>
        </div>
        <SectionLayout>
            <EndorsementsModule />
        </SectionLayout>
        <GetinvolvedSection />
    </Layout>
  )
}

export default Endorsements