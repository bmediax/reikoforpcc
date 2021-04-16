import React from 'react'
// import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const SliderSection = ({ cover }) => {
    return (
        <div id="slider">
            <span className="slider_text">
                <h1>{cover.title.raw[0].text}</h1>
                <Link to="/endorsements" className="btn whiteBlue-btn" style={{ maxWidth: 300 }}> {cover.button_title.text} </Link>
            </span>
        </div>
    )
}

export default SliderSection