import React from 'react'
import { motion } from 'framer-motion'
import './EndorsementCard.scss'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { RiLockUnlockFill } from 'react-icons/ri'
// import { cardVariants } from '../tools/motionVariants'

const EndorsementCard = ({ logo, link, name, position }) => {
    const endorseImg = getImage(logo.localFile)
    const isUrl = (isLink) => {
        if (isLink) {
            if (logo.localFile) {
                return (
                    <a href={link.url}>
                        <GatsbyImage image={endorseImg} alt="Endorsement Image" />
                    </a>
                )
            } 
            
            else {
                return (
                    <a href={link.url}>
                        <h2> {name.text} </h2>
                    </a>
                )
            }
        } else {
            if (logo.localFile) {
                return (
                    <GatsbyImage image={endorseImg} alt="Endorsement Image" />
                )
            } 
            
            else {
                return (
                    <h2> {name.text} </h2>
                )
            }
        }
    }
    return (
        <motion.div whileHover={{ scale: 1.05 }} className="endorsement-card">
            {/* If url and if logo */}
            {isUrl(link.url)}
            <p> {position.text}</p>
        </motion.div>
    )
}

export default EndorsementCard