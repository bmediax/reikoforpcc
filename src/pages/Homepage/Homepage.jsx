// import SliderView from "../../components/SliderView"
import { motion } from 'framer-motion'
import './Homepage.scss'
import { variants as motionVariants } from '../../tools/motionVariants'
import Meetreiko from './Meetreiko'
import PrioritiesSection from './PrioritiesSection'
import EndorsementsSection from './EndorsementsSection'
import EventsSection from './EventsSection'

const Homepage = () => {
    return (
        <motion.div className="container" initial="out" animate="in" exit="out" variants={motionVariants}>
            {/* <SliderView /> */}
            <Meetreiko />
            <PrioritiesSection />
            <EndorsementsSection />
            <EventsSection />
        </motion.div>
    )
}

export default Homepage