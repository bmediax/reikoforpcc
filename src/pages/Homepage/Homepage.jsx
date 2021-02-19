import SliderView from "../../components/SliderView"
import './Homepage.scss'
import Meetreiko from './Meetreiko'

const Homepage = () => {
    return (
        <div className="container">
            <SliderView />
            <Meetreiko />
            <section className="priorities">
                <h1> Priorities </h1>

                <div className="three-column-option_container">
                    <div className="three-column-option">
                        <div>
                            <img src="https://via.placeholder.com/150" alt=""/>
                            <h2>Housing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt=""/>
                            <h2>Housing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt=""/>
                            <h2>Housing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt=""/>
                            <h2>Housing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt=""/>
                            <h2>Housing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt=""/>
                            <h2>Housing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                        </div>
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