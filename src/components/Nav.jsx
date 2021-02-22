import React, { useState, useContext } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import Donatebtn from '../components/Donatebtn'
import { Link } from 'react-router-dom'
import { navContext } from '../tools/navContext'

const Nav = (props) => {
    const navItems = useContext(navContext)

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
                    {navItems.map(navs => (
                        <React.Fragment key={navs.id}>
                            <a className="nav-item" href={navs.path} onClick={handleMobileToggle}>{navs.title}</a>
                        </React.Fragment>
                    ))}
                    <a className="nav-item donate-mobile" href={props.donationlink} style={{display: 'none'}}>Donate</a>
                </div >
                <div className="donate-contain">
                    <RiMenu3Fill className="menu-icon" onClick={handleMobileToggle} />
                    <Donatebtn />
                </div>
            </div>
        </nav>
    )
}

export default Nav;