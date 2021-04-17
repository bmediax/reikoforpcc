import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import SectionLayout from '../layout/SectionLayout'
import EndorsementsModule from '../components/modules/EndorsementsModule'
import GetinvolvedSection from '../components/sections/GetinvolvedSection'
import '../styles/GetinvolvedSection.scss'
import Cover from '../components/modules/CoverModule'
import coverDesk from '../images/photos/sabinReiko.jpg'

// markup
const Endorsements = ({ data }) => {
  if (!data) return null
  const endorsementsDocument = data.allPrismicEndorsements.edges[0].node.data.endorsements
  // console.log(endorsementsDocument)
  return (
    <Layout title="Endorsements">
        <Cover coverImage={coverDesk}>
          Endorsements
        </Cover>
        <SectionLayout>
            <EndorsementsModule endorsements={endorsementsDocument} />
        </SectionLayout>
        <GetinvolvedSection />
    </Layout>
  )
}

export default Endorsements

export const query = graphql`
  query endorseQuery {
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