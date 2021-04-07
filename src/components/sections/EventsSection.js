import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionLayout from '../../layout/SectionLayout'
import { BiLinkExternal } from "react-icons/bi";
// import { IoLogoGoogle } from 'react-icons/io'
// import { SiMicrosoftoutlook } from 'react-icons/si'
import axios from '../../utils/axios'

const EventsSection = () => {
    const [caldata, setCaldata] = useState('');
    const [loader, setLoader] = useState(false)
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    useEffect(() => {
        async function fetchCalData() {
            const response = await axios.get(process.env.GATSBY_CAL_EVENT_KICKOFF)
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
                    <motion.span className="event-des" ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{ type: 'spring', damping: 35, stiffness: 100 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}>
                        <h3>{caldata.data.title}</h3>
                        <p>{caldata.data.description}</p>
                        <div className="event-links">
                            <a href={caldata.links.event_page} className="btn blue-btn">
                                View Event Page<BiLinkExternal  className="btn-icon" />
                            </a>
                            {/* <a href={caldata.links.google} className="small-btn blue-btn">
                                Add to Google <IoLogoGoogle  className="btn-icon" />
                            </a>
                            <a href={caldata.links.office365} className="small-btn blue-btn">
                                Add to Outlook<SiMicrosoftoutlook  className="btn-icon" />
                            </a> */}
                        </div>
                    </motion.span>
                    <motion.span className="event-date" ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{ delay: 0.4 , type: 'spring', damping: 35, stiffness: 100 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}>
                        <span className="event-date_month">February</span>
                        <span className="event-date_day">23</span>
                    </motion.span>
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