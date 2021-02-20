import SliderView from "../../components/SliderView"
import './Homepage.scss'
import Meetreiko from './Meetreiko'
import PrioritiesSection from './PrioritiesSection'
import EndorsementsSection from './EndorsementsSection'

const Homepage = () => {
    return (
        <div className="container">
            <SliderView />
            <Meetreiko />
            <PrioritiesSection />
            <EndorsementsSection />
        </div>
    )
}

export default Homepage