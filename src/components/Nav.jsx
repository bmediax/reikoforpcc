import React, { useState, useContext } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import Donatebtn from '../components/Donatebtn'
import { Link } from 'react-router-dom'
import { navContext } from '../tools/navContext'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { navVariants } from '../tools/motionVariants'

import logoPng from "../assets/logo.png"
import logoWebp from '../assets/logo.webp'

const Nav = (props) => {
    const isMobile = useMediaQuery({ query: `(max-width:860px)`})

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
                <div className="logo-contain">
                    <Link to="/" exact="true">
                        <picture id="logo">
                            <source srcSet={logoWebp} type="image/webp" />
                            <source srcSet={logoPng} type="image/jpeg" /> 
                            <img src={logoPng} alt="Rieko Mia Williams For PCC Logo"/>
                        </picture>
                    </Link>
                </div>
                <motion.div className="nav-contain" style={{display: mobileMenu ? 'block' : 'none'}} animate={mobileMenu ? "open" : "closed"} variants={isMobile? navVariants: null}>
                    <Link className="nav-item" to="/meet-reiko" onClick={handleMobileToggle}>Meet Reiko</Link>
                    {navItems.map(navs => (
                        <React.Fragment key={navs.id}>
                            <a className="nav-item" href={navs.path} onClick={handleMobileToggle}>{navs.title}</a>
                        </React.Fragment>
                    ))}
                </motion.div >
                <div className="donate-contain">
                    <Donatebtn />
                </div>
            </div>
        </nav>
    )
}

export default Nav;