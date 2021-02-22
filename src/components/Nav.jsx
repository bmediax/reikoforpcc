import React, { useState } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import Donatebtn from '../components/Donatebtn'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const [mobileMenu, setMobileMenu ] = useState(false);

    const handleMobileOpen = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo-contain">
                    <a href="/" exact="true">
                        <img src={props.logo} alt="Rieko Mia Williams For PCC Logo" id="logo" />
                    </a>
                </div>
                <div className="nav-contain" style={{display: mobileMenu ? 'block' : 'none'}}>
                    <Link className="nav-item" to="/meet-reiko">Meet Reiko</Link>
                    <a className="nav-item" href="/#priorities">Priorities</a>
                    <a className="nav-item" href="/#endorsements">Endorsements</a>
                    <a className="nav-item" href="/#events">Events</a>
                    <a className="nav-item donate-mobile" href="#events">Donate</a>
                </div>
                <div className="donate-contain">
                    <RiMenu3Fill className="menu-icon" onClick={handleMobileOpen} />
                    <Donatebtn />
                </div>
            </div>
        </nav>
    )
}

export default Nav;