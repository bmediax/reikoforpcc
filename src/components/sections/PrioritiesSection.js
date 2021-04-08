import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaticImage } from 'gatsby-plugin-image'
import SectionLayout from '../../layout/SectionLayout'
import { useMediaQuery } from "react-responsive";

const PrioritiesSection = () => {
    const isMobile = useMediaQuery({ maxWidth: 550 })
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    
    return (
        <SectionLayout topic="priorities" tag="prioritiesSection">
            <h1> Priorities </h1>

            <div className="three-column-option_container">
                <div className="three-column-option">
                    <motion.div ref={isMobile ? null : ref}
                    animate={isMobile ? "visible" : controls }
                    initial="hidden"
                    transition={{ duration: 1.5 , type: 'spring', damping: 10, stiffness: 100 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}>
                        <center>
                            <StaticImage src="../../images/gfx/icons/circlePeople.png" alt="Inclusive Icon" width={120} placeholder="blurred" />
                        </center>
                        <h2> Inclusive, equitable education for all students.</h2>
                    </motion.div>
                    <motion.div ref={isMobile ? null : ref}
                    animate={isMobile ? "visible" : controls }
                    initial="hidden"
                    transition={{ delay:.2, duration: 1.5 , type: 'spring', damping: 10, stiffness: 100 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}>
                        <center>
                            <StaticImage src="../../images/gfx/icons/heartHand.png" alt="Heart hand Icon" width={120} placeholder="blurred" />
                        </center>
                        <h2>Stronger partnerships with K-12 school districts.</h2>
                    </motion.div>
                    <motion.div ref={isMobile ? null : ref}
                    animate={isMobile ? "visible" : controls }
                    initial="hidden"
                    transition={{ delay:.4, duration: 1.5 , type: 'spring', damping: 10, stiffness: 100 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}>
                        <center>
                            <StaticImage src="../../images/gfx/icons/eye.png" alt="Transparent Eye Icon" width={120} placeholder="blurred" />
                        </center>
                        <h2>Transparent commitment within the PCC Board</h2>
                    </motion.div>
                </div>
            </div>
            <Link to="/priorities" className="btn transparent-btn" style={{ margin: "30px auto 0 auto"}}>View Priorities!</Link>
        </SectionLayout>
    )
}

export default PrioritiesSection