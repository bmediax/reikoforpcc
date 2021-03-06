import React from 'react'

const SectionLayout = (props) => {
    return (
        <section className={props.topic} id={props.tag}>
            {props.children}
        </section>
    )
}

export default SectionLayout