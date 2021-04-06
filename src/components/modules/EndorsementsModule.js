import React from 'react'
import EndorsementCard from '../../components/modules/EndorsementCard'
import { endorsementData } from '../../data/endorsementData'

const EndorsementsModule = (props) => {
    return (
        <div className="endorsementmodule_wrapper">
            {endorsementData.slice(0, props.limit).map((endorse, index) => (
                <EndorsementCard key={index} {...endorse} />
            ))}
        </div>
    )
}

export default EndorsementsModule;