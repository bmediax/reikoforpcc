import React, { useState } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import Donatebtn from '../components/Donatebtn'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const [mobileMenu, setMobileMenu ] = useState(false);

    const handleMobileToggle = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo-contain">
                    <Link to="/" exact="true">
                        <img src={props.logo} alt="Rieko Mia Williams For PCC Logo" id="logo" />
                    </Link>
                </div>
                <div className="nav-contain" style={{display: mobileMenu ? 'block' : 'none'}}>
                    <Link className="nav-item" to="/meet-reiko" onClick={handleMobileToggle}>Meet Reiko</Link>
                    <a className="nav-item" href="/#priorities" onClick={handleMobileToggle}>Priorities</a>
                    <a className="nav-item" href="/#endorsements" onClick={handleMobileToggle}>Endorsements</a>
                    <a className="nav-item" href="/#events" onClick={handleMobileToggle}>Events</a>
                    <a className="nav-item donate-mobile" href={props.donationlink} style={{display: 'none'}}>Donate</a>
                </div >
                <div className="donate-contain">
                    <RiMenu3Fill className="menu-icon" onClick={handleMobileToggle} />
                    <Donatebtn donationlink={props.donationlink}/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;