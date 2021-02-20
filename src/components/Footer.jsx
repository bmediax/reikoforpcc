// import { Link } from 'react-router-dom'
import { SiFacebook, SiInstagram, SiMinutemailer } from "react-icons/si";
import ReactTooltip from "react-tooltip";

const Footer = (props) => {
    return (
        <footer>
            <div id="footer-wrapper">
                <div className="footer-logo">
                    <img src={props.logo} alt="Reiko for PCC Logo" />
                </div>
                <ul className="footer-nav">
                    <li><a href="#meet-reiko">Meet Reiko</a></li>
                    <li><a href="#priorities">Priorities</a></li>
                    <li><a href="#endorsements">Endorsements</a></li>
                    <li><a href="#endorsements">Events</a></li>
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