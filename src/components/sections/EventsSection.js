import React from 'react'
import SectionLayout from '../../layout/SectionLayout'
import { eventsData } from '../../data/eventsData'
import { BiLinkExternal } from "react-icons/bi";

const EventsSection = () => {
    return (
        <SectionLayout topic="events" tag="events">
            <h1> Events </h1>

            {/* Events Module */}
            <div className="events-module">
                {eventsData.map((event, index) => (
                    <span className="events-module_section" key={index}>
                        <span className="event-des">
                            <sub className="event-sub">{event.day}, {event.month} {event.date}, at {event.time} PDT</sub>
                            <h3>{event.title}</h3>
                            <p>{event.descr}</p>
                            <div className="event-links">
                                <a href={event.link} target="_blank" className="btn blue-btn">
                                    View Event Page<BiLinkExternal  className="btn-icon" />
                                </a>
                            </div>
                        </span>
                        <span className="event-date">
                            <span className="event-date_month">{event.month}</span>
                            <span className="event-date_day">{event.date}</span>
                        </span>
                    </span>
                ))}
            </div>
        </SectionLayout>
    )
}

export default EventsSection