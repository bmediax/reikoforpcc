import React, { useState, useEffect } from 'react'
import SectionLayout from '../../layout/SectionLayout'
import { BiLinkExternal } from "react-icons/bi";
// import { IoLogoGoogle } from 'react-icons/io'
// import { SiMicrosoftoutlook } from 'react-icons/si'
import axios from '../../utils/axios'

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

const EventsSection = () => {
    const [caldata, setCaldata] = useState('');
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        async function fetchCalData() {
            const response = await axios.get(process.env.CAL_EVENT_KICKOFF)
            setCaldata(response.data)
            setLoader(true)
            return response
        }
        fetchCalData()
    }, [])

    if (!loader) {
        return <div align="center">Loading</div>
    }

    return (
        <SectionLayout topic="events" tag="events">
            <h1> Events </h1>

            {/* Events Module */}
            <div className="events-module">
                <span className="events-module_section">
                    <span className="event-des">
                        <h3>{caldata.data.title}</h3>
                        <p>{caldata.data.description}</p>
                        <div className="event-links">
                            <a href={caldata.links.event_page} className="small-btn blue-btn">
                                View Event Page<BiLinkExternal  className="btn-icon" />
                            </a>
                            {/* <a href={caldata.links.google} className="small-btn blue-btn">
                                Add to Google <IoLogoGoogle  className="btn-icon" />
                            </a>
                            <a href={caldata.links.office365} className="small-btn blue-btn">
                                Add to Outlook<SiMicrosoftoutlook  className="btn-icon" />
                            </a> */}
                        </div>
                    </span>
                    <span className="event-date">
                        <span className="event-date_month">February</span>
                        <span className="event-date_day">23</span>
                    </span>
                </span>
                {/* <span className="event-des">
                    <h3>Campaign Kick - Off</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cumque aut fuga enim. Eius quam beatae velit, ad autem laudantium debitis harum natus temporibus rem obcaecati? Iste repudiandae, laborum nobis eaque illo odio, ab soluta fuga quod sequi suscipit exercitationem nam error quidem dicta quisquam blanditiis velit illum distinctio! Mollitia.</p>
                    <a href="https://google.com" className="btn blue-btn">View Event <RiCalendarEventLine  className="btn-icon" /></a>
                </span> */}
            </div>
        </SectionLayout>
    )
}

export default EventsSection