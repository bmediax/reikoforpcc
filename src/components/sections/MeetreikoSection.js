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
                title="WHY AM I RUNNING?"
                link="meet-reiko" 
                linkText="Read More" 
                icon={AboutIcon} />
        </SectionLayout>
    )
}

export default MeetreikoSection