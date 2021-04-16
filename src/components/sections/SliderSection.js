import React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SliderSection = ({ cover }) => {
    const coverImg = getImage(cover.image.localFile)
    return (
        <div style={{ display: "grid"}}>
            <GatsbyImage 
                image={coverImg}
                style={{
                    gridArea: "1/1",
                    height: '75vh',
                }}
                layout="fullWidth"
                alt=""
                />
            <div
                style={{
                gridArea: "1/1",
                position: "relative",
                placeItems: "center",
                display: "grid",
                justifyItems: "flex-start",
                alignSelf: "center"
                }}
                className="slider_text">
                <h1>{cover.title.raw[0].text}</h1>
                <Link to="/endorsements" className="btn whiteBlue-btn" style={{ maxWidth: 300 }}> {cover.button_title.text} </Link>
            </div>
        </div>
    )
}

export default SliderSection

// <div id="slider">
//     <span className="slider_text">
//         <h1>{cover.title.raw[0].text}</h1>
//         <Link to="/endorsements" className="btn whiteBlue-btn" style={{ maxWidth: 300 }}> {cover.button_title.text} </Link>
//     </span>
// </div>