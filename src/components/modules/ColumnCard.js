import React from 'react'
import { motion } from 'framer-motion'
import * as columncardStyles from './ColumnCard.module.scss'

const ColumnCard = ({priority, desc, cover, delay, aide}) => {
    return (
        <motion.div id={aide} className={columncardStyles.columnCardWrap} initial={{ y:100 }} animate={{ y:0 }} transition={{ delay: `.${delay}`, type: "spring" }}>
            <span className={`${columncardStyles.card} ${columncardStyles.info}`}>
                <h4>{priority}</h4>
                <p>{desc}</p>
            </span>
            <span className={`${columncardStyles.card} ${columncardStyles.cover}`} style={{ background: `url(${cover})` }} />
        </motion.div>
    )
}

export default ColumnCard