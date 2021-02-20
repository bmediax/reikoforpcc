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
                </div>
                <div className="donate-contain">
                    <a href="https://google.com" className="btn red-btn donate">Donate</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;