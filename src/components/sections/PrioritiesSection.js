import React from 'react'
import { Link } from 'gatsby'
import SectionLayout from '../../layout/SectionLayout'

import ColumnCard from '../modules/ColumnCard'
// import { prioritiesData } from "../../data/prioritiesData"

const PrioritiesSection = ({ priorities }) => {
    return (
        <SectionLayout topic="priorities" tag="prioritiesSection">
            <h1> Reiko's Priorities </h1>
            {priorities.priorities.map((prio, index) => (
                <ColumnCard 
                priority={prio.title.text} 
                desc={prio.description.text} 
                cover={prio.image.url} 
                key={index}
                delay={index}
                aide={prio.short_title.text} />
            ))}
            <Link to="/priorities" className="btn minimal-btn" style={{ margin: "30px auto 0 auto" }}>View Page</Link>
        </SectionLayout>
    )
}

export default PrioritiesSection