import * as React from "react"

import { Helmet } from "react-helmet"

// Data
import { navObjects } from '../data/navObject';

// Context
import { navContext } from '../data/context/navContext'
import { donationContext } from '../data/context/donationContext'

// Components
// import Logo from '../images/logo.png'
import Nav from '../components/Nav'
import Footer from "../components/Footer"

// Style
import '../styles/_base.scss'

// Utils
// import { AnimatePresence } from 'framer-motion'

const Layout = (props) => {
    const DonationLink = "https://secure.actblue.com/donate/friends-of-reiko-1"

    return (
        <donationContext.Provider value={DonationLink}>
            <navContext.Provider value={navObjects}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Reiko4PCC | {props.title}</title>
                </Helmet>
                <div className="RMW_container">
                    <Nav />
                    <div className="RMW_wrapper">
                        {props.children}
                        <Footer />
                    </div>
                </div>
            </navContext.Provider>
        </donationContext.Provider>
    )
}

export default Layout