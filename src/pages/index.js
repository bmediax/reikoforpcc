// Importing Reacting
import { React } from 'react'

// Technologies
import { motion } from 'framer-motion'

// Style
import '../styles/Homepage.scss'

import Layout from '../layout/Layout'

import { pageVariants } from '../utils/motionVariants'

// Sections
import SliderSection from '../components/Sections/SliderSection'
import MeetreikoSection from '../components/Sections/MeetreikoSection'
import PrioritiesSection from '../components/Sections/PrioritiesSection'
import EndorsementsSection from '../components/Sections/EndorsementsSection'
import EventsSection from '../components/Sections/EventsSection'
import GetinvolvedModule from '../components/modules/GetinvolvedModule'

const Homepage = () => {
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

export default Homepage