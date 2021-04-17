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
  const homeDocument = data.allPrismicHomepage.edges[0].node.data
  const priorityDocument = data.allPrismicPriorities.edges[0].node.data
  const eventsDocument = data.allPrismicEvents.edges[0].node.data
  const endorsementsDocument = data.allPrismicEndorsements.edges[0].node.data.endorsements

  const homeContent = {
    cover: homeDocument.cover[0],
    meetReiko: homeDocument.meet_reiko[0],
    quote: homeDocument.quote[0],
  }

  // console.log(priorityDocument)

  return (
    <Layout title="Home">
      <SliderSection cover={homeContent.cover} />
      <MeetreikoSection meetReiko={homeContent.meetReiko} />
      <PrioritiesSection priorities={priorityDocument} />
      <QuoteSection quote={homeContent.quote} />
      <EndorsementsSection endorsements={endorsementsDocument} />
      <EventsSection events={eventsDocument.events} />
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
    },
    allPrismicPriorities {
      edges {
        node {
          data {
            priorities {
              title {
                text
              }
              short_title {
                text
              }
              description {
                text
              }
              image {
                url
              }
            }
          }
        }
      }
    },
    allPrismicEvents {
      edges {
        node {
          data {
            events {
              date(fromNow: true, formatString: "MMMM, DD, YYYY")
              title {
                text
              }
              link {
                url
              }
              highlight
              description {
                text
              }
            }
          }
        }
      }
    },
    allPrismicEndorsements {
      edges {
        node {
          data {
            endorsements {
              name {
                text
              }
              position {
                text
              }
              link {
                url
              }
              logo {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, quality: 100)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`