// Technologies
import React from "react"
import '../styles/Homepage.scss'

// Style
import Layout from '../layout/Layout'

import { motion } from 'framer-motion'
import { pageVariants } from '../utils/motionVariants'

// Sections
import SliderSection from '../components/Sections/SliderSection'
import MeetreikoSection from '../components/Sections/MeetreikoSection'
import PrioritiesSection from '../components/Sections/PrioritiesSection'
import EndorsementsSection from '../components/Sections/EndorsementsSection'
import EventsSection from '../components/Sections/EventsSection'
import GetinvolvedModule from '../components/modules/GetinvolvedModule'

const IndexPage = () => {
    return (
        <Layout title="Homepage">
            <motion.div className="container" initial="out" animate="in" exit="out" variants={pageVariants}>
                <SliderSection />
                <MeetreikoSection />
                <PrioritiesSection />
                <EndorsementsSection />
                <EventsSection />
                <GetinvolvedModule />
            </motion.div>
        </Layout>
    )
}

export default IndexPage