const Homepage = () => {
    return (
        <div className="container">
            <div id="slider">
                <div className="stay-tuned">
                    <span className="tuned-title">Stay Tuned</span>
                    <form className="tuned-item">
                        <input className="tuned-input" type="email"  placeholder="Email Address" />
                        <input type="submit" className="tuned-arrow" value=">" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Homepage