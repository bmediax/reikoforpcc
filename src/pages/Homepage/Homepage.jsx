// import SliderView from "../../components/SliderView"
import './Homepage.scss'
import Meetreiko from './Meetreiko'
import PrioritiesSection from './PrioritiesSection'
import EndorsementsSection from './EndorsementsSection'
import EventsSection from './EventsSection'

const Homepage = () => {
    return (
        <div className="container">
            {/* <SliderView /> */}
            <Meetreiko />
            <PrioritiesSection />
            <EndorsementsSection />
            <EventsSection />
        </div>
    )
}

export default Homepage