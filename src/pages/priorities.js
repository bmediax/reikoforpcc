import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ColumnCard from '../components/modules/ColumnCard'
import GetinvolvedSection from '../components/sections/GetinvolvedSection'
import SectionLayout from '../layout/SectionLayout'
import '../styles/GetinvolvedSection.scss'
import Cover from '../components/modules/CoverModule'
import coverReiko from '../images/photos/wcc.jpg'

// markup
const Priorities = ({ data }) => {
  if (!data) return null
  const priorityDocument = data.allPrismicPriorities.edges[0].node.data
  return (
    <Layout title="Priorities" ide="priorities">
        <Cover coverImage={coverReiko}>
          Priorities
        </Cover>
        <SectionLayout topic="prior">
          {priorityDocument.priorities.map((prio, index) => (
              <ColumnCard 
              priority={prio.title.text} 
              desc={prio.description.text} 
              cover={prio.image.url} 
              key={index}
              delay={index}
              aide={prio.short_title.text} />
          ))}
        </SectionLayout>
        <GetinvolvedSection />
    </Layout>
  )
}

export default Priorities

export const query = graphql`
  query prioritiespageQuery {
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
    }
  }
`