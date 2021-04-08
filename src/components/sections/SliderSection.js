import React from 'react'
import { Link } from "gatsby"

const SliderSection = () => {
    return (
        <div id="slider">
            <span className="slider_text">
                <h1>Experienced. Thoughtful.</h1>
                <h1>A Leader Focused on Student Success.</h1>
                <Link to="/get-involved" className="btn whiteBlue-btn"> I'd like to help! </Link>
            </span>
        </div>
    )
}

export default SliderSection