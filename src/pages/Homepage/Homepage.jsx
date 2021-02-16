import SliderView from "../../components/SliderView"
import './Homepage.scss'

const Homepage = () => {
    return (
        <div className="container">
            <SliderView />
            <section className="priorities">
                <h1 align="center"> Priorities </h1>

                <div className="three-column-option_container">
                    <div className="three-column-option">
                        <div>Housing</div>
                        <div>Housing</div>
                        <div>Housing</div>
                        <div>Housing</div>
                        <div>Housing</div>
                        <div>Housing</div>
                    </div>
                </div>
            </section>
            {/* <div id="slider"> */}
                {/* Stayed Tuned */}
                {/* <div className="stay-tuned">
                    <span className="tuned-title">Stay Tuned</span>
                    <form className="tuned-item">
                        <input className="tuned-input" type="email"  placeholder="Email Address" />
                        <input type="submit" className="tuned-arrow" value=">" />
                    </form>
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default Homepage