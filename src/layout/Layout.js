import React from 'react'

// Data
import { navObjects } from '../data/navObjects';

// Context
import { navContext } from '../data/context/navContext'
import { donationContext } from '../data/context/donationContext'

// Components
import Logo from '../assets/logo.png'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// Utils
import { AnimatePresence } from 'framer-motion'

const Layout = ({children}) => {
    const DonationLink = "https://secure.actblue.com/donate/friends-of-reiko-1"

    return (
        <donationContext.Provider value={DonationLink}>
            <navContext.Provider value={navObjects}>
                <div className="RMW_container">
                    <Nav />
                    <div className="RMW_wrapper">
                        <AnimatePresence exitBeforeEnter>
                            {children}
                        </AnimatePresence>
                    </div>
                    <Footer logo={Logo} />
                </div>
            </navContext.Provider>
        </donationContext.Provider>
    )
}