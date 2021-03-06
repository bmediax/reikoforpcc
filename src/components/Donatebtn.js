import React, { useContext } from 'react'
import { AiFillHeart } from "react-icons/ai";
// import { motion } from 'framer-motion'
// import { btnDonateVariants } from '../utils/motionVariants'

import { donationContext } from "../data/context/donationContext";

const Donatebtn = (props) => {
    const donationlink = useContext(donationContext)

    return (
        <a href={donationlink} 
            className="btn donate donate-btn">
                <AiFillHeart className="btn-icon" style={{marginTop: "-2px"}}/>
        </a>
    )
}

export default Donatebtn;