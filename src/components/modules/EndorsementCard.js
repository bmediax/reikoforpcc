import React from 'react'
import './EndorsementCard.scss'
import { motion } from 'framer-motion'
// import { cardVariants } from '../tools/motionVariants'

const EndorsementCard = (props) => {
    return (
        <motion.div whileHover={{ scale: 1.05 }} className="endorsement-card">
            {
                props.logo ?
                    <a href={props.url}>
                        {props.logo}
                    </a>
                :
                <a href={props.url}>
                    <h2> {props.name} </h2>
                </a>
            }
            <p> {props.position}{props.company ? ", " + props.company : null}</p>
        </motion.div>
    )
}

export default EndorsementCard