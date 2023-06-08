import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Review = () => {
    const [ratings, setRatings] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-bold mb-10 text-center">Testimonials</h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full">
            {
                ratings?.map(rating => <SwiperSlide key={rating._id}>
                    <div className="flex gap-5 items-center mx-2">
                        <div>
                            <img className="rounded" src={rating.img} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-5">{rating.name}</h2>
                            <p>{rating.description}</p>
                            <div className="ml-48 mt-5">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating.rating}
                                readOnly
                            />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)
            }

        </Swiper>
        </div>
    );
};

export default Review;