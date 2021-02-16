import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderView = () => {
    return (
        <Carousel showThumbs={false} showStatus={false} useKeyboardArrows={true}>
            <div>
                <img src="https://via.placeholder.com/700x250" alt=""/>
            </div>
            <div>
                <img src="https://via.placeholder.com/700x250" alt=""/>
            </div>
            <div>
                <img src="https://via.placeholder.com/700x250" alt=""/>
            </div>
        </Carousel>
    )
}

export default SliderView