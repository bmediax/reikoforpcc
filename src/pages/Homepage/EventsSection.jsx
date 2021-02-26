import React from 'react'
import SectionTemplate from '../../components/SectionTemplate'
import { RiCalendarEventLine } from "react-icons/ri";
import { eventsData } from '../../data/eventsData'

const EventsSection = () => {
    return (
        <SectionTemplate topic="events" tag="events">
            <h1> Events </h1>

            {/* Events Module */}
            <div className="events-module">
                {eventsData.map(event => (
                    <span key={event.id} className="events-module_section">
                        <span className="event-des">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <a target="_blank" rel="noreferrer" href={event.link} className="btn blue-btn">View Event <RiCalendarEventLine  className="btn-icon" /></a>
                        </span>
                        <span className="event-date">
                            <span className="event-date_month">February</span>
                            <span className="event-date_day">23</span>
                        </span>
                    </span>
                ))}
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