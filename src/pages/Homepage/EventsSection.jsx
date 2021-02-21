import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SectionTemplate from '../../components/SectionTemplate'
import { RiCalendarEventLine } from "react-icons/ri";

const EventsSection = () => {
    // Set State on Calendar Data API
    const [caldata, setCaldata] = useState();

    useEffect(() => {
        const fetchCaldata = async () => {
            const response = await axios("https://calndr.link/api/events/9KSRrUdaTG");
            setCaldata(response.data);
        }
        fetchCaldata();
    }, []);

    return (
        <SectionTemplate topic="events" tag="events">
            <h1> Events </h1>

            {/* Events Module */}
            <div className="events-module">
                <span className="events-module_section">
                    <span className="event-des">
                        <h3>Campaign Kick - Off</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque aut fuga enim. Eius quam beatae velit, ad autem laudantium debitis harum natus temporibus rem obcaecati? Iste repudiandae, laborum nobis eaque illo odio, ab soluta fuga quod sequi suscipit exercitationem nam error quidem dicta quisquam blanditiis velit illum distinctio! Mollitia.</p>
                        <a href="https://google.com" className="btn blue-btn">View Event <RiCalendarEventLine  className="btn-icon" /></a>
                        {caldata.map(calendars => (
                            <button> {calendars.links} </button>
                        ))}
                    </span>
                    <span className="event-img" style={{background: "url('https://via.placeholder.com/420x250?text=Events%20Image')"}} />
                </span>
                <span className="events-module_section">
                    <span className="event-img" style={{background: "url('https://via.placeholder.com/420x250?text=Events%20Image')"}} />
                    <span className="event-des">
                    <h3>Campaign Kick - Off</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque aut fuga enim. Eius quam beatae velit, ad autem laudantium debitis harum natus temporibus rem obcaecati? Iste repudiandae, laborum nobis eaque illo odio, ab soluta fuga quod sequi suscipit exercitationem nam error quidem dicta quisquam blanditiis velit illum distinctio! Mollitia.</p>
                        <a href="https://google.com" className="btn blue-btn">View Event <RiCalendarEventLine  className="btn-icon" /></a>
                    </span>
                </span>
            </div>
        </SectionTemplate>
    )
}

export default EventsSection