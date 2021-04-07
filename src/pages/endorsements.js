import React from 'react'
import Layout from '../layout'
import SectionLayout from '../layout/SectionLayout'
import EndorsementsModule from '../components/modules/EndorsementsModule'
import GetinvolvedSection from '../components/sections/GetinvolvedSection'
import '../styles/GetinvolvedSection.scss'
import Cover from '../components/modules/CoverModule'
import coverDesk from '../images/photos/sabinReiko.jpg'

// markup
const Endorsements = () => {
  return (
    <Layout title="Endorsements">
        <Cover coverImage={coverDesk}>
          Endorsements
        </Cover>
        <SectionLayout>
            <EndorsementsModule />
        </SectionLayout>
        <GetinvolvedSection />
    </Layout>
  )
}

export default Endorsements