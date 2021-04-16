import React from 'react'

import ProfileModule from '../modules/ProfileModule'
import SectionLayout from '../../layout/SectionLayout'
import { FcAbout } from 'react-icons/fc'

const AboutIcon = <FcAbout />

const MeetreikoSection = ({ meetReiko }) => {
    return (
        <SectionLayout topic="meet-reiko_section" tag="meet-reiko">
            <h1> {meetReiko.title.text} </h1>

            <ProfileModule 
                title={meetReiko.sub_title.text}
                link="meet-reiko" 
                linkText={meetReiko.button_text.text} 
                icon={AboutIcon}
                description={meetReiko.description.raw}
                headshot={meetReiko.headshot.url}
                alts={meetReiko.headshot.alt} />
        </SectionLayout>
    )
}

export default MeetreikoSection