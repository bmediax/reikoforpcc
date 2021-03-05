import ProfileModule from '../../modules/ProfileModule'
import SectionTemplate from '../../components/SectionTemplate'
import { FcAbout } from 'react-icons/fc'

const AboutIcon = <FcAbout />

const MeetreikoSection = () => {
    return (
        <SectionTemplate topic="meet-reiko_section" tag="meet-reiko">
            <h1> Meet Reiko Mia Williams </h1>

            <ProfileModule 
                title="WHY AM I RUNNING?"
                link="meet-reiko" 
                linkText="Read More" 
                icon={AboutIcon} />
        </SectionTemplate>
    )
}

export default MeetreikoSection