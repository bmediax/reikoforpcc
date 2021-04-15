// Technologies
import React from "react"
import { graphql } from 'gatsby'

// Style
import '../styles/homepage.scss'
import Layout from '../layout'

// Sections
import SliderSection from '../components/sections/SliderSection'
import MeetreikoSection from '../components/sections/MeetreikoSection'
import QuoteSection from '../components/sections/QuoteSection'
import PrioritiesSection from '../components/sections/PrioritiesSection'
import EndorsementsSection from '../components/sections/EndorsementsSection'
import EventsSection from '../components/sections/EventsSection'
import GetinvolvedSection from '../components/sections/GetinvolvedSection'

const IndexPage = ({ data }) => {
  if (!data) return null
  const document = data.allPrismicHomepage.edges[0].node.data

  const pageContent = {
    cta: document.cta_cover,
    meetReiko: document.meet_reiko,
    prioritiesTitle: document.reiko_priorities,
    reikoPriority: document.reiko_priority,
    quote: document.quote,
    event: document.event,
  }
  return (
    <Layout title="Home">
      <SliderSection cta={pageContent.cta} />
      <MeetreikoSection meetReiko={pageContent.meetReiko} />
      <PrioritiesSection priorityTitle={pageContent.prioritiesTitle} reikoPriority={pageContent.reikoPriority} />
      <QuoteSection quote={pageContent.quote} />
      <EndorsementsSection />
      <EventsSection event={pageContent.event} />
      <GetinvolvedSection />
    </Layout>
  )
}

export const query = graphql`
  query homeQuery {
    allPrismicHomepage {
      edges {
        node {
          data {
            cta_cover {
              title {
                raw
              }
              button_text {
                raw
              }
              link {
                url
              }
              cover_image {
                url
                alt
              }
            }
            meet_reiko {
              title {
                raw
              }
              sub_title {
                raw
              }
              description {
                raw
              }
              button_text {
                raw
              }
              link {
                url
              }
              meet_reiko_headshot {
                url
                alt
              }
            }
            reiko_priorities {
              raw
            }
            reiko_priority {
              header {
                raw
              }
              priority_text {
                raw
              }
              priority_image {
                alt
                url
              }
            }
            quote {
              quote_text {
                raw
              }
              quote_background {
                url
                alt
              }
              cite {
                raw
              }
            }
            event {
              title {
                raw
              }
              description {
                raw
              }
              when(formatString: "")
              link {
                url
              }
              is_highlight
            }
          }
        }
      }
    }
  }
`

export default IndexPage