import { AiFillHeart } from "react-icons/ai";
import { motion } from 'framer-motion'
import { btnDonateVariants } from '../utils/motionVariants'

import { useContext } from 'react'
import { donationContext } from "../data/context/donationContext";

const Donatebtn = (props) => {
    const donationlink = useContext(donationContext)

    return (
        <motion.a href={donationlink} 
            className="btn donate donate-btn"
            whileHover="in" 
            whileTap="out" 
            variants={btnDonateVariants}>
                <AiFillHeart className="btn-icon" style={{marginTop: "-2px"}}/>
        </motion.a>
    )
}

export default Donatebtn;