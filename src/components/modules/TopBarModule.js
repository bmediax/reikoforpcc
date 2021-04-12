import React from 'react'
import { eventsData } from '../../data/eventsData'
import * as topBarStyles from './TopBarModule.module.scss'

const TopBarModule = () => {
    return (
        <div className={topBarStyles.topbar_wrapper}>
            <div className={topBarStyles.topbar_container}>
                <span className={topBarStyles.topbarText}>
                    <h4>Upcoming Event: {eventsData[1].title}</h4>
                </span>
                <span className={topBarStyles.topbarButton}>
                    <a href={eventsData[1].link}>View Event</a>
                </span>
            </div>
        </div>
    )
}

export default TopBarModule