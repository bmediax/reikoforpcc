import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const SliderSection = ({ cta }) => {
    return (
        <React.Fragment>
            {cta.map((slider, index) => (
                <div id="slider" key={index}>
                    <span className="slider_text">
                        <h1>{RichText.asText(slider.title.raw)}</h1>
                        <Link to="/endorsements" className="btn whiteBlue-btn" style={{ maxWidth: 300 }}> {RichText.asText(slider.button_text.raw)} </Link>
                    </span>
                </div>
            ))}
        </React.Fragment>
    )
}

export default SliderSection