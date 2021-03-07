import * as React from "react"

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

const Layout = (props) => {
    const DonationLink = "https://secure.actblue.com/donate/friends-of-reiko-1"

    return (
        <donationContext.Provider value={DonationLink}>
            <navContext.Provider value={navObjects}>
                {/* <meta http-equiv="origin-trial" content="AmE7JKWYS+Jm3JYE0Znce9RZeHuBUVRFnLhayo4fpKcCiiZpSR8kBt+1Thplw10W4caLlCV37/SNOFZJaoxLXQMAAAB5eyJvcmlnaW4iOiJodHRwczovL3JlaWtvZm9ycGNjLmNvbTo0NDMiLCJmZWF0dXJlIjoiVW5yZXN0cmljdGVkU2hhcmVkQXJyYXlCdWZmZXIiLCJleHBpcnkiOjE2MzM0NzgzOTksImlzU3ViZG9tYWluIjp0cnVlfQ==" /> */}
                <SEO title={props.title} />
                <div className="RMW_container">
                    <Nav />
                    <motion.main
                        initial={{
                            opacity: 0,
                            x: -200
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        exit={{
                            opacity: 0,
                            x: 200
                        }}
                        transition={{
                            type: "spring",
                            mass: 0.35,
                            stiffness: 75,
                            duration: 0.3
                        }}
                    >
                        <div className="RMW_wrapper">
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