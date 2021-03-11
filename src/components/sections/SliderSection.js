import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const SliderSection = () => {
    return (
        <div id="slider">
            <span className="slider_text">
                <StaticImage src="../../images/gfx/logo-icon_white.png" width={450} alt="Reiko for PCC" />
                {/* <h1>Reiko Mia Williams</h1>
                <p> for PCC Zone 7 </p> */}
            </span>
        </div>
    )
}

export default SliderSection