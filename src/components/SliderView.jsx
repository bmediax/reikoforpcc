// import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../pages/Homepage/Homepage.scss'

const SliderView = () => {
    return (
        <div id="slider">
            <span className="slider_text">
                <h1>Reiko Mia Williams</h1>
                <p> for PCC Zone 7 </p>
            </span>
        </div>
        // <Carousel showThumbs={false} showStatus={false} useKeyboardArrows={true} dynamicHeight={false}>
        //     <div>
        //         <img src="https://via.placeholder.com/700x250" alt=""/>
        //     </div>
        //     <div>
        //         <img src="https://via.placeholder.com/700x250" alt=""/>
        //     </div>
        //     <div>
        //         <img src="https://via.placeholder.com/700x250" alt=""/>
        //     </div>
        // </Carousel>
    )
}

export default SliderView