import * as React from "react"
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';

// import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../layout"
import SectionLayout from '../layout/SectionLayout'
import GetinvolvedSection from '../components/sections/GetinvolvedSection'
import Cover from '../components/modules/CoverModule'
import coverReiko from '../images/photos/headReiko.jpg'

// markup
const MeetReiko = ({data}) => {
  if (!data) return null
  const document = data.allPrismicMeetreiko.edges[0].node.data
  return (
    <Layout title="Meet Reiko">
      <Cover coverImage={coverReiko}>
        {document.header[0].title.text}
      </Cover>
      <SectionLayout>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          { RichText.render(document.description.raw)}
          {/* <StaticImage src="../images/photos/reikoStudent.jpg" alt="Reiko with Student" width={350} imgClassName="imagePhoto" className="imagePhotoWrap" />
          <StaticImage src="../images/photos/reikoFamily.jpg" alt="Reiko's Family" imgClassName="imagePhoto" className="imagePhotoWrap" width={400} />
          <StaticImage src="../images/photos/reikoTeachers.jpg" alt="Reiko with Teacher" width={400} imgClassName="imagePhoto" className="imagePhotoWrap" /> */}
          {/* <StaticImage src="../images/photos/reikoTeachers.jpg" alt="Reiko with Teachers" loading="lazy" width={500} imgStyle={{ borderRadius: "15px" }} /> */}
        </div>
      </SectionLayout>
      <GetinvolvedSection />
    </Layout>
  )
}

export default MeetReiko

export const query = graphql`
  query meetreikoQuery {
  allPrismicMeetreiko {
    edges {
      node {
        data {
          description {
            text
            raw
            html
          }
          header {
            title {
              text
              html
              raw
            }
          }
        }
      }
    }
  }
}
`