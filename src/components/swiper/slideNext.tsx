
import { useSwiper } from 'swiper/react';
import arrow from "../../assets/img/arrowButton.png";


const SwiperButtonNext = () => {

    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slideNext()} className='swiper__button' >
            <img className='swiper__button-next' src={arrow} alt=""/>
        </div>
    )
};

export default SwiperButtonNext