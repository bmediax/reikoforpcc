import React from 'react'
// import { AiFillHeart } from 'react-icons/ai'
import SectionLayout from '../../layout/SectionLayout'
import EndorsementsModule from '../modules/EndorsementsModule'

const EndorsementsSection = () => {
    return (
        <SectionLayout topic="endorsements" tag="endorsements">
            <div className="endo_logos">
                <h1> Endorsements </h1>
                <EndorsementsModule />
            </div>
            {/* <div className="endo_want" style={{paddingBottom: "6%"}}>
                <h2> Interested in Endorsing? </h2>
                <button className="btn red-btn" style={{cursor: "pointer", display: endorse ? "none" : "inline-block", border: "none"}}>I want to Endorse Reiko! <AiFillHeart className="btn-icon" /></button>
            </div> */}
        </SectionLayout>
    )
}

export default EndorsementsSection