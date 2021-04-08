import React, { useState, useContext, useEffect } from 'react'

// Utils
import { RiMenu3Fill } from 'react-icons/ri'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'
// import { useMediaQuery } from 'react-responsive';

// Component
import Donatebtn from '../components/Donatebtn'
import { navContext } from '../data/context/navContext'
// import { navVariants, btnDonateVariants } from '../utils/motionVariants'

const Nav = (props) => {
    const navItems = useContext(navContext)
    const [mobileMenu, setMobileMenu ] = useState(false);
    
    const handleMobileToggle = () => {
        setMobileMenu(!mobileMenu)
    }

    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".navBar").className = "navBar navScroll";
            } else {
                document.querySelector(".navBar").className = "navBar";
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className='navBar'>
            <div className="nav-wrapper">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="mobile-nav-contain">
                    <RiMenu3Fill className="menu-icon" onClick={handleMobileToggle} />
                </motion.div>
                <div className="logo-contain" id="logo">
                    <Link to="/" exact="true">
                        <StaticImage src="../images/gfx/logo.png" alt="Rieko Mia Williams For PCC Logo" placeholder="blurred" height={70} align="center" />
                    </Link>
                </div>
                <div className="nav-contain" style={{display: mobileMenu ? 'block' : 'none'}}>
                    {navItems.map((navs, index) => (
                        <React.Fragment key={index}>
                            <Link className="nav-item" to={navs.path} onClick={handleMobileToggle}>{navs.title}</Link>
                        </React.Fragment>
                    ))}
                </div>
                <div className="donate-contain">
                    <Donatebtn />
                </div>
            </div>
        </nav>
    )
}

export default Nav;