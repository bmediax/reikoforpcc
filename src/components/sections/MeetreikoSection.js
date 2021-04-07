import React from 'react'

import ProfileModule from '../modules/ProfileModule'
import SectionLayout from '../../layout/SectionLayout'
import { FcAbout } from 'react-icons/fc'

const AboutIcon = <FcAbout />

const MeetreikoSection = () => {
    return (
        <SectionLayout topic="meet-reiko_section" tag="meet-reiko">
            <h1> Meet Reiko Mia Williams </h1>

            <ProfileModule 
                title="Why am I running?"
                link="meet-reiko" 
                linkText="Who is Reiko?" 
                icon={AboutIcon} />
        </SectionLayout>
    )
}

export default MeetreikoSection