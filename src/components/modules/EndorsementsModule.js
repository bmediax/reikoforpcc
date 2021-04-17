import React from 'react'
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import EndorsementCard from '../../components/modules/EndorsementCard'
// import { endorsementData } from '../../data/endorsementData'

const EndorsementsModule = ({limit, endorsements}) => {
    // const controls = useAnimation();
    // const [ref, inView] = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         controls.start("visible");
    //     }
    // }, [controls, inView]);

    return (
        <div className="endorsementmodule_wrapper">
            {endorsements.slice(0, limit).map((endorse, index) => (
                <span key={index}>
                    <EndorsementCard {...endorse} />
                </span>
            ))}
        </div>
        // <div className="endorsementmodule_wrapper">
        //     {endorsementData.slice(0, limit).map((endorse, index) => (
        //         <span key={index}>
        //             <EndorsementCard {...endorse} />
        //         </span>
        //     ))}
        // </div>
    )
}

export default EndorsementsModule;