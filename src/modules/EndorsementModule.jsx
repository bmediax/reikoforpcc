import './EndorsementModule.scss'
import { motion } from 'framer-motion'
// import { cardVariants } from '../tools/motionVariants'

const EndorsementCard = () => {
    return (
        <motion.div className="endorsement-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
            <h2> Janelle Bynum </h2>
            <p> State Representative </p>
        </motion.div>
    )
}

export default EndorsementCard