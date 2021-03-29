import React from 'react'

const coverModule = ( props ) => {
    return (
        <div id="cover" style={{ background: `url(${props.coverImage})` }}>
            <h1> { props.children } </h1>
        </div>
    )
}

export default coverModule