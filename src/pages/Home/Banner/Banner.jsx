import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../../public/all-imges/banner/banner-1.jpg"
import banner2 from "../../../../public/all-imges/banner/banner-2.jpg"
import banner3 from "../../../../public/all-imges/banner/banner-3.jpg"


const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Banner;