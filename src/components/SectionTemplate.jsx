const SectionTemplate = (props) => {
    return (
        <section className={props.topic}>
            {props.children}
        </section>
    )
}

export default SectionTemplate