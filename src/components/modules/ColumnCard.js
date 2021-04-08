import React from 'react'
import * as columncardStyles from './ColumnCard.module.scss'

const ColumnCard = ({priority, desc}) => {
    return (
        <div className={columncardStyles.columnCardWrap}> 
            <span className={columncardStyles.card}>
                <h4>{priority}</h4>
                <p>{desc}</p>
            </span>
            <span className={columncardStyles.card}>2</span>
        </div>
    )
}

export default ColumnCard