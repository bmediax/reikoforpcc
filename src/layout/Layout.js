// Data
import { navObjects } from '../data/navObjects';

// Context
import { navContext } from '../data/context/navContext'
import { donationContext } from '../data/context/donationContext'

// Components
import Logo from '../assets/logo.png'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// Style
import '../styles/_base.scss'

// Utils
import { AnimatePresence } from 'framer-motion'

const Layout = ({children, title}) => {
    const DonationLink = "https://secure.actblue.com/donate/friends-of-reiko-1"

    return (
        <donationContext.Provider value={DonationLink}>
            <navContext.Provider value={navObjects}>
                <title>Reiko4PCC | {title}</title>
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

export default Layout