import React from 'react'
import * as columncardStyles from './ColumnCard.module.scss'

const ColumnCard = ({priority, desc, cover}) => {
    return (
        <div className={columncardStyles.columnCardWrap}> 
            <span className={`${columncardStyles.card} ${columncardStyles.info}`}>
                <h4>{priority}</h4>
                <p>{desc}</p>
            </span>
            <span className={`${columncardStyles.card} ${columncardStyles.cover}`} style={{ background: `url(${cover})` }} />
        </div>
    )
}

export default ColumnCard