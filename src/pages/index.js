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

  const homeContent = {
    cover: document.cover[0],
    meetReiko: document.meet_reiko[0],
    quote: document.quote[0],
  }

  return (
    <Layout title="Home">
      <SliderSection cover={homeContent.cover} />
      <MeetreikoSection meetReiko={homeContent.meetReiko} />
      <PrioritiesSection />
      <QuoteSection quote={homeContent.quote} />
      <EndorsementsSection />
      <EventsSection />
      <GetinvolvedSection />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allPrismicHomepage {
      edges {
        node {
          data {
            cover {
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
              title {
                raw
              }
              button_title {
                text
              }
            }
            meet_reiko {
              title {
                text
              }
              sub_title {
                text
              }
              description {
                raw
              }
              button_text {
                text
              }
              headshot {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
            quote {
              quote_text {
                text
              }
              quote_cite {
                raw
              }
              quote_background {
                url
              }
            }
          }
        }
      }
    }
  }
`