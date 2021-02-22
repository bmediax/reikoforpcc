// import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { SiFacebook, SiInstagram, SiMinutemailer } from "react-icons/si";
import ReactTooltip from "react-tooltip";
import { navContext } from '../tools/navContext';

const Footer = (props) => {
    const navItems = useContext(navContext)
    return (
        <footer>
            <div id="footer-wrapper">
                <div className="footer-logo">
                    <img src={props.logo} alt="Reiko for PCC Logo" />
                </div>
                <ul className="footer-nav">
                {navItems.map(navs => (
                    <li key={navs.id}><a href={navs.path}>{navs.title}</a></li>
                ))};
                </ul>
                <div className="footer-social">
                    <a href="https://google.com"><SiMinutemailer data-for="main" data-tip="Email Us" data-iscapture="true" alt="Email Reiko" /></a>
                    <a href="https://google.com"><SiFacebook data-for="main" data-tip="Like us on Facebook" data-iscapture="true" alt="Like on Facebook" /></a>
                    <a href="https://google.com"><SiInstagram data-for="main" data-tip="Follow us on Instagram" data-iscapture="true" alt="Follow us on Facebook"/></a>
                    <ReactTooltip
                        id="main"
                        multiline={true}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer