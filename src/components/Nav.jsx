import { AiFillHeart } from "react-icons/ai";
import { RiMenu3Fill } from 'react-icons/ri'
// import { a } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo-contain">
                    <a href="/" exact="true">
                        <img src={props.logo} alt="Rieko Mia Williams For PCC Logo" id="logo" />
                    </a>
                </div>
                <div className="nav-contain">
                    <a className="nav-item" href="#meet-reiko">Meet Reiko</a>
                    <a className="nav-item" href="#priorities">Priorities</a>
                    <a className="nav-item" href="#endorsements">Endorsements</a>
                    <a className="nav-item" href="#events">Events</a>
                    <a className="nav-item donate-mobile" href="#events">Donate</a>
                </div>
                <div className="donate-contain">
                    <RiMenu3Fill className="menu-icon" />
                    <a href="https://google.com" className="btn red-btn donate">Donate <AiFillHeart className="btn-icon" style={{marginTop: "-2px"}}/></a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;