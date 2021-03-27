import React from 'react'
import EndorsementCard from '../../components/modules/EndorsementCard'
import { endorsementData } from '../../data/endorsementData'

const EndorsementsModule = (props) => {
    return (
        <div className="endorsementmodule_wrapper">
            {endorsementData.slice(0, props.limit).map(endorse => (
                <EndorsementCard {...endorse} />
            ))}
            <EndorsementCard name="Your Logo" url="#getinvolved" />
        </div>
    )
}

export default EndorsementsModule;