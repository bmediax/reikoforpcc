import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

// Styling
import './ProfileModule.scss'

// import RmwHeadshot from '../../images/photos/RMW-headshot.jpeg'

const ProfileModule = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="profile-module">
            <motion.span className="profile-module_img" ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 1.5 , type: 'spring', damping: 10, stiffness: 100 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 }
                }}>
                <StaticImage src="../../images/gfx/reiko-logo_mask.png" 
                    alt="Reiko Mia Williams Headshot" 
                    placeholder="blurred" height={400} />
            </motion.span>
            <span className="profile-module_textarea">
                <h3>{props.title}</h3>
                <p>“It Takes A Village” reflects my life experiences. A black teenage parent, my Mother, took adult education programs (supported by an extended family) to earn her license as a practical nurse. While completing her B.A. in Nursing, she died of leukemia just before my 13th birthday.</p>
                <br />
                <p>A parent to three daughters myself, she has inspired me to serve communities that have helped me and others over time. Community colleges better support struggling families with affordable access to high-quality public education and workforce training while with childcare services, healthcare, housing, and other partners that help pave pathways to opportunity.</p>
                <Link to={props.link} className="btn minimal-btn" style={{marginTop:"15px"}}>{props.linkText} {props.icon}</Link>
            </span>
        </div>
    )
}

export default ProfileModule