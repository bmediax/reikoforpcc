import { Link } from 'react-router-dom'
import SectionTemplate from '../../components/SectionTemplate'

const EndorsementsSection = () => {
    return (
        <SectionTemplate topic="endorsements" tag="endorsements">
            <h1> Endorsements </h1>

            {/* Endorsement Logos */}
            <div className="endo_logos">
                <div className="endo_logo-part">
                    <span className="endos">
                        <img src="https://via.placeholder.com/150x50" alt="Endorsement Logo" />
                    </span>
                    <span className="endos">
                        <img src="https://via.placeholder.com/150x50" alt="Endorsement Logo" />
                    </span>
                    <span className="endos">
                        <img src="https://via.placeholder.com/150x50" alt="Endorsement Logo" />
                    </span>
                </div>
                <div className="endo_logo-part">
                    <span className="endos">
                        <img src="https://via.placeholder.com/150x50" alt="Endorsement Logo" />
                    </span>
                    <span className="endos">
                        <img src="https://via.placeholder.com/150x50" alt="Endorsement Logo" />
                    </span>
                    <span className="endos">
                        <img src="https://via.placeholder.com/150x50" alt="Endorsement Logo" />
                    </span>
                </div>
            </div>
            <div className="endo_want">
                <h2> Interested in Endorsing? </h2>
                <Link to="/" className="btn red-btn" style={{display: "inline-block"}}>View More</Link>
            </div>
        </SectionTemplate>
    )
}

export default EndorsementsSection