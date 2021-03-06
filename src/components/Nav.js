import React, { useState, useContext } from 'react'

// Utils
import { RiMenu3Fill } from 'react-icons/ri'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
// import { motion } from 'framer-motion'
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

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="mobile-nav-contain">
                    <RiMenu3Fill className="menu-icon" onClick={handleMobileToggle} />
                </div>
                <div className="logo-contain" id="logo">
                    <Link to="/" exact="true">
                        <StaticImage src="../images/gfx/logo.png" alt="Rieko Mia Williams For PCC Logo" height={65} align="center" />
                    </Link>
                </div>
                <div className="nav-contain" style={{display: mobileMenu ? 'block' : 'none'}}>
                    <Link className="nav-item" to="/meet-reiko" onClick={handleMobileToggle}>Meet Reiko</Link>
                    {navItems.map(navs => (
                        <React.Fragment key={navs.id}>
                            <a className="nav-item" href={navs.path} onClick={handleMobileToggle}>{navs.title}</a>
                        </React.Fragment>
                    ))}
                </div >
                <div className="donate-contain">
                    <Donatebtn />
                </div>
            </div>
        </nav>
    )
}

export default Nav;