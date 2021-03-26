import React from 'react'
import SectionLayout from '../../layout/SectionLayout'
import EndorsementsModule from '../modules/EndorsementsModule'

const EndorsementsSection = () => {
    return (
        <SectionLayout topic="endorsements" tag="endorsements">
            <div className="endo_logos">
                <h1> Endorsements </h1>
                <EndorsementsModule limit="6" />
            </div>
            {/* <div className="endo_want" style={{paddingBottom: "6%"}}>
                <h2> Interested in Endorsing? </h2>
                <button className="btn red-btn">I want to Endorse Reiko! <AiFillHeart className="btn-icon" /></button>
            </div> */}
        </SectionLayout>
    )
}

export default EndorsementsSection