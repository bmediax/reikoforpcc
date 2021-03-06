import React, { useState, useContext } from 'react'

// Utils
import { RiMenu3Fill } from 'react-icons/ri'
import { Link } from 'gatsby'
// import { motion } from 'framer-motion'
// import { useMediaQuery } from 'react-responsive';

// Component
import Donatebtn from '../components/Donatebtn'
import { navContext } from '../data/context/navContext'
// import { navVariants, btnDonateVariants } from '../utils/motionVariants'

// Will be replaced with ----------------
import Logo from '../images/gfx/logo.png'
// gatsby image proccessor -------------

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
                <div className="logo-contain">
                    <Link to="/" exact="true">
                        <img src={Logo} id="logo" alt="Rieko Mia Williams For PCC Logo"/>
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