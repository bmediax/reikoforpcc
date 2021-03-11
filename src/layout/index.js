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

    // const [mode, setMode] = useState<"light" | "dark" | undefined>(
    //     window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" :"light"
    // );
    
    // useEffect(() => {
    //   const modeMe = (e) => {
    //     setMode(e.matches ? "dark" : "light");
    //   }  
    //   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', modeMe);
    //   return window.matchMedia('(prefers-color-scheme: dark)').removeListener(modeMe);
    // }, []);

    // console.log(mode);

    return (
        <donationContext.Provider value={DonationLink}>
            <navContext.Provider value={navObjects}>
                <SEO title={props.title} />
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