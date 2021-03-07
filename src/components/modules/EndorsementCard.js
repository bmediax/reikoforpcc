import React from 'react'
import './EndorsementCard.scss'
import { motion } from 'framer-motion'
// import { cardVariants } from '../tools/motionVariants'

const EndorsementCard = (props) => {
    return (
        <motion.div whileHover={{ scale: 1.05 }} className="endorsement-card">
            <h2> {props.name} </h2>
            <p> {props.position}{props.company ? ", " + props.company : null}</p>
        </motion.div>
    )
}

export default EndorsementCard