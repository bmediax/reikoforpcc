import * as React from "react"
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
        <p>“It Takes A Village” reflects my life experiences. A black teenage parent, my Mother, took adult education programs (supported by an extended family) to earn her license as a practical nurse. While completing her B.A. in Nursing, she died of leukemia just before my 13th birthday.</p>
        <p>A parent to three daughters myself, she has inspired me to serve communities that have helped me and others over time. Community colleges better support struggling families with affordable access to high-quality public education and workforce training while with childcare services, healthcare, housing, and other partners that help pave pathways to opportunity.</p>
        <p>Assisted by many beautiful people, my educational odyssey proceeded with a BS in Journalism, Government, & Politics (University of Maryland), to an MSW in Child Welfare (Howard University), to Portland State University where an M.Ed. was earned, and a Doctorate in Education (in Education Policy & Leadership) is nearly completed. </p>
        <p>Currently the Principal at Sabin Elementary School, my work experiences include serving as a social worker (Casey Family Programs), Assistant Director of Minority Recruitment and as an Associate Director for Diversity in Admissions (Portland State University), Counselor & Advisor (at PCC Rock Creek Campus), on the African American Advisory Committee as well as Strategic Planning & Outreach Committee  (Portland Public Schools), and as Board Chair on both the Youth Employment Institute and the African American Health Coalition.</p>
        <p>My life experiences, educational training, and work background help prepare me to serve on the PCC Board of Directors. As an elected Trustee supportive of fair labor practices, my top priorities will be to promote:</p>
            
        <ul>
          <li>- Inclusive, equitable education for all students</li>
          <li>- Stronger partnerships with K-12 school districts</li>
          <li>- Transparent commitment within the PCC Board to nurture a collaborative culture of Diversity, Equity, and Inclusion among faculty, staff, and administrators throughout Portland Community College and beyond.</li>
        </ul>
      </SectionLayout>
      <GetinvolvedSection />
    </Layout>
  )
}

export default MeetReiko

// import React from 'react'
// import { Helmet } from "react-helmet"
// import { motion } from 'framer-motion'
// import './MeetReiko.scss'
// import { pageVariants } from '../../tools/motionVariants'
// import SectionTemplate from '../../components/SectionTemplate'

// import GetinvolvedModule from '../../modules/GetinvolvedModule'

// const MeetReiko = () => {
//     return (
//         <motion.div initial="out" animate="in" exit="out" variants={pageVariants}>
//             <Helmet>
//                 <title> Reiko 4 PCC | Meet Reiko </title>
//             </Helmet>
//             <div id="cover">
//                 <h1> Meet Reiko </h1>
//             </div>

//             <SectionTemplate>
//                 <p>Assisted by many beautiful people, my educational odyssey proceeded with a BS in Journalism, Government, & Politics (University of Maryland), to an MSW in Child Welfare (Howard University), to Portland State University where an M.Ed. was earned, and a Doctorate in Education (in Education Policy & Leadership) is nearly completed. </p>
//                 <p>Currently the Principal at Sabin Elementary School, my work experiences include serving as a social worker (Casey Family Programs), Assistant Director of Minority Recruitment and as an Associate Director for Diversity in Admissions (Portland State University), Counselor & Advisor (at PCC Rock Creek Campus), on the African American Advisory Committee as well as Strategic Planning & Outreach Committee  (Portland Public Schools), and as Board Chair on both the Youth Employment Institute and the African American Health Coalition.</p>
//                 <p>My life experiences, educational training, and work background help prepare me to serve on the PCC Board of Directors. As an elected Trustee supportive of fair labor practices, my top priorities will be to promote:</p>
                
//                 <ul>
//                     <li>Inclusive, equitable education for all students</li>
//                     <li>Stronger partnerships with K-12 school districts</li>
//                     <li>Transparent commitment within the PCC Board to nurture a collaborative culture of Diversity, Equity, and Inclusion among faculty, staff, and administrators throughout Portland Community College and beyond.</li>
//                 </ul>
//             </SectionTemplate>
//             <GetinvolvedModule />
//         </motion.div>
//     )
// }

// export default MeetReiko
