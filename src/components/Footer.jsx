// import { Link } from 'react-router-dom'

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
                    <span>FB</span>
                    <span>INSTA</span>
                    <span>TWITTER</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer