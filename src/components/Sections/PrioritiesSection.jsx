import SectionLayout from '../../layout/SectionLayout'
import React from'react'

const PrioritiesSection = () => {
    return (
        <SectionLayout topic="priorities" tag="priorities">
            <h1> Priorities </h1>

            <div className="three-column-option_container">
                <div className="three-column-option">
                    <div>
                        <h2> Inclusive, equitable education for all students.</h2>
                    </div>
                    <div>
                        <h2>Stronger partnerships with K-12 school districts.</h2>
                    </div>
                    <div>
                        <h2>Transparent commitment within the PCC Board</h2>
                        <p>To nurture a collaborative culture of Diversity, Equity, and Inclusion among faculty, staff, and administrators throughout Portland Community College and beyond. </p>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default PrioritiesSection