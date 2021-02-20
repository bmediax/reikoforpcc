import SectionTemplate from '../../components/SectionTemplate'

const EventsSection = () => {
    return (
        <SectionTemplate topic="events">
            <h1> Events </h1>

            {/* Events Module */}
            <div className="events-module">
                <span className="events-module_section">
                    <span className="event-des"></span>
                    <span className="event-img"></span>
                </span>
                <span className="events-module_section">
                    <span className="event-img"></span>
                    <span className="event-des"></span>
                </span>
            </div>
        </SectionTemplate>
    )
}

export default EventsSection