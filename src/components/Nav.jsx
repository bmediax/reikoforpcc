import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="logo-contain">
                    <Link to="/" exact="true">
                        <img src={props.logo} alt="Rieko Mia Williams For PCC Logo" id="logo" />
                    </Link>
                </div>
                <div className="nav-contain">
                    <Link className="nav-item" to="/meet-rieko">Meet Reiko</Link>
                    <Link className="nav-item" to="/priorities">Priorities</Link>
                    <Link className="nav-item" to="/endorsements">Endorsements</Link>
                </div>
                <div className="donate-contain">
                    <a href="https://google.com" className="donate">Donate</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;