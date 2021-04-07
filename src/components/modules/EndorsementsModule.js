import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EndorsementCard from '../../components/modules/EndorsementCard'
import { endorsementData } from '../../data/endorsementData'

const EndorsementsModule = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="endorsementmodule_wrapper">
            {endorsementData.slice(0, props.limit).map((endorse, index) => (
                <motion.span key={index} ref={ props.section ? ref :  null }
                    animate={props.section ? controls : 'visible'}
                    initial="hidden"
                    transition={{ delay: `.${index}`, type: 'spring', damping: 30, stiffness: 100 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 }
                    }}>
                    <EndorsementCard {...endorse} />
                </motion.span>
            ))}
        </div>
    )
}

export default EndorsementsModule;