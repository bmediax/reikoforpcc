import ProfileModule from '../../modules/ProfileModule'
import SectionTemplate from '../../components/SectionTemplate'
import { FcAbout } from 'react-icons/fc'
import RmwHeadshot from '../../assets/imgs/RMW-headshot.jpg'

const AboutIcon = <FcAbout />

const Meetreiko = () => {
    return (
        <SectionTemplate topic="meet-reiko_section" tag="meet-reiko">
            <h1> Meet Reiko Mia Williams </h1>

            <ProfileModule 
                title="WHY AM I RUNNING?"
                img={RmwHeadshot}
                link="meet-reiko" 
                linkText="Read More" 
                icon={AboutIcon} />
        </SectionTemplate>
    )
}

export default Meetreiko