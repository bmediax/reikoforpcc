import React from 'react'
import EndorsementCard from '../../components/modules/EndorsementCard'
import { endorsementData } from '../../data/endorsementData'

const EndorsementsModule = () => {
    return (
        <div className="endorsementmodule_wrapper">
            {endorsementData.map(endorse => (
                <EndorsementCard logo={endorse.logo} url={endorse.url} key={endorse.id} name={endorse.name} position={endorse.position} company={endorse.company}/>
            ))}
        </div>
    )
}

export default EndorsementsModule;