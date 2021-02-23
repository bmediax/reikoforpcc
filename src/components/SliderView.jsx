// import { Carousel } from "react-responsive-carousel"
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Parallax } from 'react-parallax'
import '../pages/Homepage/Homepage.scss'
import reikoElection from '../assets/imgs/RMW-DeskWait.jpg'

const SliderView = () => {
    return (
        <Parallax bgImage={reikoElection} strength={-100}>
            <div id="slider">
                <span className="slider_text">
                    <h1>Reiko Mia Williams</h1>
                    <p> for PCC Zone 7 </p>
                </span>
            </div>
        </Parallax>
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