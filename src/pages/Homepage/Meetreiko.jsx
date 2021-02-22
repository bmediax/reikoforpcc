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
                descr="“It Takes A Village” reflects my life experiences. A black teenage parent, my Mother, took adult education programs (supported by an extended family) to earn her license as a practical nurse.  While completing her B.A. in Nursing, she died of leukemia just before my 13th birthday. A parent to three daughters myself, she has inspired me to serve communities that have helped me and others over time. Community colleges better support struggling families with affordable access to high-quality public education and workforce training while with childcare services, healthcare, housing, and other partners that help pave pathways to opportunity." 
                img={RmwHeadshot}
                link="meet-reiko" 
                linkText="Learn More" 
                icon={AboutIcon} />
        </SectionTemplate>
    )
}

export default Meetreiko