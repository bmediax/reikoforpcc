import React from 'react'
import SocialMediaBtns from './SocialMediaBtns'

const Contact = () => {
    return (
        <div id="contact">
            <a href="mailto:reiko4pcc@gmail.com">
                <span id="notify-me">
                    <h2>Email Me</h2>
                    <span className="arrow-icon"> > </span>
                </span>
            </a>
            <SocialMediaBtns />
        </div>
    )
}

export default Contact