const SectionTemplate = (props) => {
    return (
        <section className={props.topic} id={props.tag}>
            {props.children}
        </section>
    )
}

export default SectionTemplate