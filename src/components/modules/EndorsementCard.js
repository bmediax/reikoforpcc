import React from 'react'
import './EndorsementCard.scss'
import { motion } from 'framer-motion'
// import { cardVariants } from '../tools/motionVariants'

const EndorsementCard = (props) => {
    const isUrl = (isLink) => {
        if (isLink) {
            if (props.logo) {
                return (
                    <a href={props.url}>
                        {props.logo}
                    </a>
                )
            } 
            
            else {
                return (
                    <a href={props.url}>
                        <h2> {props.name} </h2>
                    </a>
                )
            }
        } else {
            if (props.logo) {
                return (props.logo)
            } 
            
            else {
                return (
                    <h2> {props.name} </h2>
                )
            }
        }
    }
    return (
        <motion.div whileHover={{ scale: 1.05 }} className="endorsement-card">
            {/* If url and if logo */}
            {isUrl(props.url)}
            <p> {props.position}{props.company ? ", " + props.company : null}</p>
        </motion.div>
    )
}

export default EndorsementCard