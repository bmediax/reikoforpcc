import React from "react"

// Poppins Font
// import '../assets/fonts/poppins/stylesheet.css'

// import { Helmet } from "react-helmet"
import { motion } from 'framer-motion'

// Data
import { navObjects } from '../data/navObject';

// Context
import { navContext } from '../data/context/navContext'
import { donationContext } from '../data/context/donationContext'

// Components
import Logo from '../images/gfx/logo.png'
import Nav from '../components/Nav'
import Footer from "../components/Footer"

// Style
import '../styles/_responsive.scss'
import '../styles/_base.scss'
import SEO from "../components/seo";

// Utils
// import { AnimatePresence } from 'framer-motion'

import bannerImage from '../images/photos/RMW-profile.png'

const Layout = (props) => {
    const DonationLink = "https://secure.actblue.com/donate/friends-of-reiko-1"

    return (
        <donationContext.Provider value={DonationLink}>
            <navContext.Provider value={navObjects}>
                <SEO title={props.title} metaImage={bannerImage} />
                <div className="RMW_container">
                    <Nav />
                    <motion.main
                        initial={{
                            opacity: 0,
                            y: -200
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            y: 200
                        }}
                        transition={{
                            type: "spring",
                            mass: 0.35,
                            stiffness: 75,
                            duration: 0.3
                        }}
                    >
                        <div className="RMW_wrapper" id={props.ide}>
                            {props.children}
                        </div>
                    </motion.main>
                    <Footer logo={Logo} />
                </div>
            </navContext.Provider>
        </donationContext.Provider>
    )
}

export default Layout