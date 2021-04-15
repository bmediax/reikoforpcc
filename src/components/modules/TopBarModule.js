import React from 'react'
import { eventsData } from '../../data/eventsData'
import * as topBarStyles from './TopBarModule.module.scss'

const TopBarModule = () => {
    return (
        <div className={topBarStyles.topbar_wrapper}>
            <div className={topBarStyles.topbar_container}>
                <span className={topBarStyles.topbarText}>
                    <h4><b>Upcoming Event:</b> <a href={eventsData[0].link} style={{ color: "#FFF", textDecoration: "underline" }}>{eventsData[0].title}</a></h4>
                </span>
                <span className={topBarStyles.topbarButton}>
                    <a href={eventsData[0].link}>View Event</a>
                </span>
            </div>
        </div>
    )
}

export default TopBarModule