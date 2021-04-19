import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as topBarStyles from './TopBarModule.module.scss'

const TopBarModule = () => {
    const eventsDatas = useStaticQuery(graphql`
        query eventBanner {
            allPrismicEvents {
                edges {
                    node {
                        data {
                            events {
                                date(fromNow: true)
                                title {
                                    text
                                    raw
                                }
                                link {
                                    url
                                }
                                highlight
                                description {
                                    text
                                }
                            }
                            top_module_text {
                                text
                            }
                        }
                    }
                }
            }
        }
    `)

    const { events } = eventsDatas.allPrismicEvents.edges[0].node.data
    const { top_module_text } = eventsDatas.allPrismicEvents.edges[0].node.data
    return (
        <div className={topBarStyles.topbar_wrapper}>
            <div className={topBarStyles.topbar_container}>
                <span className={topBarStyles.topbarText}>
                    <h4>{top_module_text.text} <a href={events[0].link.url} style={{ color: "#FFF", textDecoration: "underline" }}>{events[0].title.text}</a></h4>
                </span>
                <span className={topBarStyles.topbarButton}>
                    <a href={events[0].link.url}>View Event</a>
                </span>
            </div>
        </div>
    )
}

export default TopBarModule