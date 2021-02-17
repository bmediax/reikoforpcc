import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <footer>
            <div id="footer-wrapper">
                <div className="footer-logo">
                    <img src={props.logo} alt="Reiko for PCC Logo" width="60px"/>
                </div>
                <ul className="footer-nav">
                    <li><Link to="/meet-reiko">Meet Reiko</Link></li>
                    <li><Link to="/priorities">Priorities</Link></li>
                    <li><Link to="/endorsements">Endorsements</Link></li>
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