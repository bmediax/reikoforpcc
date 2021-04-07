import React from 'react'
import { Link } from "gatsby"
// import { StaticImage } from 'gatsby-plugin-image'

const SliderSection = () => {
    return (
        <div id="slider">
            <span className="slider_text">
                {/* <StaticImage src="../../images/gfx/logo-icon_white.png" placeholder="blurred" width={450} alt="Reiko for PCC" /> */}
                <h1>Experienced. Thoughtful.</h1>
                <h1>A Leader Focused on Student Success.</h1>
                <Link to="/get-involved" className="btn whiteBlue-btn"> I'd like to help! </Link>
            </span>
        </div>
    )
}

export default SliderSection