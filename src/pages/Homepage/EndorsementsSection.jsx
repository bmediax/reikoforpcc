import SectionTemplate from '../../components/SectionTemplate'

const EndorsementsSection = () => {
    return (
        <SectionTemplate topic="endorsements">
            <h1> Endorsements </h1>

            {/* Endorsement Logos */}
            <div className="endo_logos">
                <div className="endo_logo-part">
                    <span className="endos"></span>
                    <span className="endos"></span>
                    <span className="endos"></span>
                </div>
                <br />
                <div className="endo_logo-part">
                    <span className="endos"></span>
                    <span className="endos"></span>
                    <span className="endos"></span>
                </div>
            </div>
        </SectionTemplate>
    )
}

export default EndorsementsSection