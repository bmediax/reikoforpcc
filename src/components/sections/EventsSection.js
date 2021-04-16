import React from 'react'
import SectionLayout from '../../layout/SectionLayout'
// import { eventsData } from '../../data/eventsData'
import { BiLinkExternal } from "react-icons/bi";

const EventsSection = ({ events }) => {
    return (
        <SectionLayout topic="events" tag="events">
            <h1> Events </h1>

            {/* Events Module */}
            <div className="events-module">
                {events.map((event, index) => (
                    <span className={`events-module_section ${event.highlight ? 'highlight' : null }`} key={index}>
                        <span className="event-des">
                            <sub className="event-sub">{event.date}</sub>
                            <h3>{event.title.text}</h3>
                            <p>{event.description.text}</p>
                            <div className="event-links">
                                <a href={event.link.url} target="_blank" rel="noreferrer" className="btn blue-btn">
                                    View Event Page<BiLinkExternal  className="btn-icon" />
                                </a>
                            </div>
                        </span>
                        <span className="event-date">
                            <span className="event-date_month">{event.date.split(',').splice(0, 1)}</span>
                            <span className="event-date_day">{event.date.split(',').splice(1, 1)}</span>
                            {console.log(event.date.split(',').splice(0, 2))}
                        </span>
                    </span>
                ))}
            </div>
            {/* <div className="events-module">
                {eventsData.map((event, index) => (
                    <span className={`events-module_section ${event.highlight ? 'highlight' : null }`} key={index}>
                        <span className="event-des">
                            <sub className="event-sub">{event.day}, {event.month} {event.date}, at {event.time} PDT</sub>
                            <h3>{event.title}</h3>
                            <p>{event.descr}</p>
                            <div className="event-links">
                                <a href={event.link} target="_blank" rel="noreferrer" className="btn blue-btn">
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
            </div> */}
        </SectionLayout>
    )
}

export default EventsSection