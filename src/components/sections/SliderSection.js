import React from 'react'
import { Link } from "gatsby"

const SliderSection = () => {
    return (
        <div id="slider">
            <span className="slider_text">
                <h1>Experienced. Thoughtful.</h1>
                <h1>A Leader Focused on Student Success.</h1>
                <Link to="/endorsements" className="btn whiteBlue-btn" style={{ maxWidth: 300 }}> View Supporters of Reiko! </Link>
            </span>
        </div>
    )
}

export default SliderSection