import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../layout"
import SectionLayout from '../layout/SectionLayout'
import GetinvolvedSection from '../components/sections/GetinvolvedSection'
import Cover from '../components/modules/CoverModule'
import coverReiko from '../images/photos/headReiko.jpg'

// markup
const MeetReiko = () => {
  return (
    <Layout title="Meet Reiko">
      <Cover coverImage={coverReiko}>
        Meet Reiko
      </Cover>
      <SectionLayout>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <p>“It Takes A Village” reflects my life experiences. A black teenage parent, my Mother, took adult education programs (supported by an extended family) to earn her license as a practical nurse. While completing her B.A. in Nursing, she died of leukemia just before my 13th birthday.</p>
          <StaticImage src="../images/photos/reikoFamily.jpg" alt="Reiko's Family" style={{ float: "left", margin:"2% 2% 2% 0" }} imgClassName="imagePhoto" className="imagePhotoWrap" width={400} />
          <p>A parent to three daughters myself, she has inspired me to serve communities that have helped me and others over time. Community colleges better support struggling families with affordable access to high-quality public education and workforce training while with childcare services, healthcare, housing, and other partners that help pave pathways to opportunity.</p>
          <p>Assisted by many beautiful people, my educational odyssey proceeded with a BS in Journalism, Government, & Politics (University of Maryland), to an MSW in Child Welfare (Howard University), to Portland State Universit where an M.Ed. was earned, and a Doctorate in Education (in Education Policy & Leadership) is nearly completed. </p>
          <StaticImage src="../images/photos/reikoStudent.jpg" alt="Reiko with Student" style={{ float: "right", margin: "2% 0 2% 2%" }} width={350} imgClassName="imagePhoto" className="imagePhotoWrap" />
          <p>Currently the Principal at Sabin Elementary School, my work experiences include serving as a social worker (Casey Family Programs), Assistant Director of Minority Recruitment and as an Associate Director for Diversity in Admissions (Portland State University), Counselor & Advisor (at PCC Rock Creek Campus), on the African American Advisory Committee as well as Strategic Planning & Outreach Committee  (Portland Public Schools), and as Board Chair on both the Youth Employment Institute and the African American Health Coalition.</p>
          <StaticImage src="../images/photos/reikoTeachers.jpg" alt="Reiko with Teacher" style={{ float: "left", margin:"0 2% 2% 0" }} width={400} imgClassName="imagePhoto" className="imagePhotoWrap" />
          <p>My life experiences, educational training, and work background help prepare me to serve on the PCC Board of Directors. As an elected Trustee supportive of fair labor practices, my top priorities will be to promote:</p>
          <ul>
            <li>- Inclusive, equitable education for all students</li>
            <li>- Stronger partnerships with K-12 school districts</li>
            <li>- Transparent commitment within the PCC Board to nurture a collaborative culture of Diversity, Equity, and Inclusion among faculty, staff, and administrators throughout Portland Community College and beyond.</li>
          </ul>
          {/* <StaticImage src="../images/photos/reikoTeachers.jpg" alt="Reiko with Teachers" loading="lazy" width={500} imgStyle={{ borderRadius: "15px" }} /> */}
        </div>
      </SectionLayout>
      <GetinvolvedSection />
    </Layout>
  )
}

export default MeetReiko