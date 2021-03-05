import { React } from 'react'
// import { AiFillHeart } from 'react-icons/ai'
import EndorsementCard from '../../modules/EndorsementModule'
import SectionTemplate from '../../components/SectionTemplate'
import { endorsementData } from '../../data/endorsementData'

const EndorsementsSection = () => {
    return (
        <SectionTemplate topic="endorsements" tag="endorsements">
            <div className="endo_logos">
                <h1> Endorsements </h1>
                <div className="endorsementmodule_wrapper">
                    {endorsementData.map(endorse => (
                        <EndorsementCard name={endorse.name} position={endorse.position} key={endorse.id} company={endorse.company}/>
                    ))}
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