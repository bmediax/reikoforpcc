import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import SectionTemplate from '../../components/SectionTemplate'
import { RiCalendarEventLine, RiContrastDropLine } from "react-icons/ri";
// import { eventsData } from '../../data/eventsData'

const EventsSection = () => {
    const [caldata, setCaldata] = useState("");

    const getCaldata = () => {
        Axios.get('https://calndr.link/api/events/9KSRrUdaTG').then((response) => {
            const calApiData = response.data
            setCaldata(calApiData)
        }).catch(error => console.error(error))
    }

    useEffect( () => {
        getCaldata();
    }, [])

    const displayCaldata = () => {
        if (caldata != null ) {
            return (
                <span className="events-module_section">
                    <span className="event-des">
                        <h3>{caldata.data.title}</h3>
                        <p>{caldata.data.description}</p>
                        <a target="_blank" rel="noreferrer" href={caldata.data.link} className="btn blue-btn">View Event <RiCalendarEventLine  className="btn-icon" /></a>
                    </span>
                    <span className="event-date">
                        <span className="event-date_month">February</span>
                        <span className="event-date_day">23</span>
                    </span>
                </span>
            )
        } else {
            return (<h1>No Calendar Data Yet</h1>)
        }
    }

    return (
        <SectionTemplate topic="events" tag="events">
            <h1> Events </h1>

            {/* Events Module */}
            <div className="events-module">
                {displayCaldata()}
                {/* <span className="event-des">
                    <h3>Campaign Kick - Off</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque aut fuga enim. Eius quam beatae velit, ad autem laudantium debitis harum natus temporibus rem obcaecati? Iste repudiandae, laborum nobis eaque illo odio, ab soluta fuga quod sequi suscipit exercitationem nam error quidem dicta quisquam blanditiis velit illum distinctio! Mollitia.</p>
                    <a href="https://google.com" className="btn blue-btn">View Event <RiCalendarEventLine  className="btn-icon" /></a>
                </span> */}
            </div>
        </SectionTemplate>
    )
}

export default EventsSection