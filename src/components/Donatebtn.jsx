import { AiFillHeart } from "react-icons/ai";
import { motion } from 'framer-motion'
import { btnDonateVariants } from '../tools/motionVariants'

import { useContext } from 'react'
import { donationContext } from "../tools/donationContext";

const Donatebtn = (props) => {
    const donationlink = useContext(donationContext)

    return (
        <motion.a href={donationlink} 
            className="btn donate donate-btn"
            whileHover="in" 
            whileTap="out" 
            variants={btnDonateVariants}>
                Donate <AiFillHeart className="btn-icon" style={{marginTop: "-2px"}}/>
        </motion.a>
    )
}

export default Donatebtn;