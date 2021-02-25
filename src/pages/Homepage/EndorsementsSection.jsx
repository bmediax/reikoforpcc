import { React } from 'react'
// import { AiFillHeart } from 'react-icons/ai'
import EndorsementCard from '../../modules/EndorsementModule'
import SectionTemplate from '../../components/SectionTemplate'

const EndorsementsSection = () => {
    return (
        <SectionTemplate topic="endorsements" tag="endorsements">

            {/* Endorsement Logos */}
            {/* <div className="endo_logos">
                <div className="endo_logo-part">
                    <span className="endos">
                        <p>Janelle Bynum, State Representative</p>
                    </span>
                    <span className="endos">
                        <p>Joe Gallegos, Former State Representative</p>
                    </span>
                    <span className="endos">
                        <p>Alexander Díaz Rios, PCC Board Director Zone 7</p>
                    </span>
                </div>
                <div className="endo_logo-part">
                    <span className="endos">
                        <p>Carmen Rubio, Portland Commissioner </p>
                    </span>
                    <span className="endos">
                        <p>Olivia Alcaire, City of Hillsboro Councilor </p>
                    </span>
                    <span className="endos">
                        <p>Narce Rodriguez, Forest Grove School Board Director</p>
                    </span>
                </div>
                <div className="endo_logo-part">
                    <span className="endos">
                        <p>Travis Nelson</p>
                    </span>
                    <span className="endos">
                        <p>Danielle Garza </p>
                    </span>
                </div>
            </div> */}

            {/* Endorsement Logos */}
            <div className="endo_logos">
                <h1> Endorsements </h1>
                <div className="endorsementmodule_wrapper">
                    <EndorsementCard />
                    <EndorsementCard />
                    <EndorsementCard />
                    <EndorsementCard />
                    <EndorsementCard />
                    <EndorsementCard />
                    <EndorsementCard />
                    <EndorsementCard />
                    <EndorsementCard />
                </div>
            </div>
            {/* <div className="endo_want" style={{paddingBottom: "6%"}}>
                <h2> Interested in Endorsing? </h2>
                <button className="btn red-btn" style={{cursor: "pointer", display: endorse ? "none" : "inline-block", border: "none"}}>I want to Endorse Reiko! <AiFillHeart className="btn-icon" /></button>
            </div> */}
        </SectionTemplate>
    )
}

export default EndorsementsSection