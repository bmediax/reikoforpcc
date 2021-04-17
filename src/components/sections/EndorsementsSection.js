import React from 'react'
import SectionLayout from '../../layout/SectionLayout'
import EndorsementsModule from '../modules/EndorsementsModule'
import { Link } from 'gatsby'

const EndorsementsSection = ({ endorsements }) => {
    return (
        <SectionLayout topic="endorsements" tag="endorsements">
            <div className="endo_logos">
                <h1> Endorsements </h1>
                <EndorsementsModule limit="9" section={true} endorsements={endorsements} />
            </div>
            <Link to="/endorsements" className="btn blue-btn" style={{ margin: "30px auto 0 auto" }}>View more!</Link>
        </SectionLayout>
    )
}

export default EndorsementsSection