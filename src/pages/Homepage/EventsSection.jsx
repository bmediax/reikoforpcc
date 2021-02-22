import React from 'react'
import SectionTemplate from '../../components/SectionTemplate'
import { RiCalendarEventLine } from "react-icons/ri";
import RmwGroup from '../../assets/imgs/RMW-group.jpg'

const EventsSection = () => {
    // const [isMenuOpen, SetIsMenuOpen] = useState(false)
    
    return (
        <SectionTemplate topic="events" tag="events">
            <h1> Events </h1>

            {/* Events Module */}
            <div className="events-module">
                <span className="events-module_section">
                    <span className="event-des">
                        <h3>Campaign Kick - Off</h3>
                        <p>Join me for my first campaign event! Come learn about my priorities and why representation matters. Speakers at the event include: Alex Díaz Rios, Zone 7 PCC Board Director Olivia Alcaire, Hillsboro City Councilor Citlalli Nuñez, PCC Student And More!</p>
                        <a target="_blank" rel="noreferrer" href="https://calndr.link/event/9KSRrUdaTG" className="btn blue-btn">View Event <RiCalendarEventLine  className="btn-icon" /></a>
                    </span>
                    <span className="event-img" style={{background: `url('${RmwGroup}')`}} />
                </span>
                {/* <span className="events-module_section">
                    <span className="event-img" style={{background: "url('https://via.placeholder.com/420x250?text=Events%20Image')"}} />
                    <span className="event-des">
                    <h3>Campaign Kick - Off</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque aut fuga enim. Eius quam beatae velit, ad autem laudantium debitis harum natus temporibus rem obcaecati? Iste repudiandae, laborum nobis eaque illo odio, ab soluta fuga quod sequi suscipit exercitationem nam error quidem dicta quisquam blanditiis velit illum distinctio! Mollitia.</p>
                        <a href="https://google.com" className="btn blue-btn">View Event <RiCalendarEventLine  className="btn-icon" /></a>
                    </span>
                </span> */}
            </div>
        </SectionTemplate>
    )
}

export default EventsSection