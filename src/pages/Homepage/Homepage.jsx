import SliderView from "../../components/SliderView"
import { motion } from 'framer-motion'
import './Homepage.scss'
import { pageVariants } from '../../tools/motionVariants'
import Meetreiko from './Meetreiko'
import PrioritiesSection from './PrioritiesSection'
import EndorsementsSection from './EndorsementsSection'
import EventsSection from './EventsSection'
import GetinvolvedSection from "./GetinvolvedSection"

const Homepage = () => {
    return (
        <motion.div className="container" initial="out" animate="in" exit="out" variants={pageVariants}>
            <SliderView />
            <Meetreiko />
            <PrioritiesSection />
            <EndorsementsSection />
            <GetinvolvedSection />
            <EventsSection />
        </motion.div>
    )
}

export default Homepage