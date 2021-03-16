import React from 'react'
import SectionLayout from '../../layout/SectionLayout'

const PrioritiesSection = () => {
    return (
        <SectionLayout topic="priorities" tag="priorities">
            <h1> Priorities </h1>

            <div className="three-column-option_container">
                <div className="three-column-option">
                    <div>
                        {/* <img src="https://via.placeholder.com/150" alt=""/> */}
                        <h2> Inclusive, equitable education for all students.</h2>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p> */}
                    </div>
                    <div>
                        {/* <img src="https://via.placeholder.com/150" alt=""/> */}
                        <h2>Stronger partnerships with K-12 school districts.</h2>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p> */}
                    </div>
                    <div>
                        {/* <img src="https://via.placeholder.com/150" alt=""/> */}
                        <h2>Transparent commitment within the PCC Board</h2>
                        {/* <p>To nurture a collaborative culture of Diversity, Equity, and Inclusion among faculty, staff, and administrators throughout Portland Community College and beyond. </p> */}
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default PrioritiesSection