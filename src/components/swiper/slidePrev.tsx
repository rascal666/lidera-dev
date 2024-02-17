
import { useSwiper } from 'swiper/react';
import arrow from "../../assets/img/arrowButton.png";


const SwiperButtonPrev = () => {

    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slidePrev()} className='swiper__button' >
            <img className='swiper__button-prev' src={arrow} alt=""/>
        </div>
    )
};

export default SwiperButtonPrev