import './business.scss'
import img from "../../assets/img/busines/busines.png";
import img2 from "../../assets/img/busines/busines2.png";
import img3 from "../../assets/img/busines/busines3.png";

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import SwiperButtonNext from '../swiper/slideNext'
import SwiperButtonPrev from "../swiper/slidePrev";
import Card from "./Card";

const Business = () => {
    return (
        <div className='business'>
            <p className="business__title">
                Бизнес
            </p>


            <div className="cards">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    navigation
                    pagination={{
                        type: 'bullets',
                        el: '.swiper__pagination',
                        clickable: true,
                    }}
                    breakpoints={{
                        660: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        320: {
                            slidesPerView: 1.3,
                            spaceBetween: 24
                        },
                    }}

                >
                    <SwiperSlide>
                        <Card title='Услуги для автомобилей "Lux-service"' note='Тараз, Абая 291' description='Ателье для автомобилей "Lux-service" предоставляют пошив чехлов, перетяжка салона, EVA полики и шумоизоляцию.' img={img}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card title='Агробизнес - животноводство, пчеловодство' note='с. Лепси, Алматинская область' description='Смешанное сельское хозяйство - бизнес, который занимается выращиванием растений (растениеводство) и разведением животных' img={img2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card title='Семейная столовая "Мерей"' note='Сарканд, Толе би  15/2' description='В столовой "Мерей" можно насладиться вкуснейшим завтраком или сытным обедом, недорогим полдником и заботливо приготовленным ужином. Рядом...' img={img3}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card title='Услуги для автомобилей "Lux-service"' note='Тараз, Абая 291' description='Ателье для автомобилей "Lux-service" предоставляют пошив чехлов, перетяжка салона, EVA полики и шумоизоляцию.' img={img2}/>
                    </SwiperSlide>

                    <div className='swiper__navigation swiper__navigation-business'>
                        <div className='swiper__buttons'>
                            <SwiperButtonPrev/>
                            <div className='swiper__pagination'></div>
                            <SwiperButtonNext />
                        </div>
                    </div>
                </Swiper>
            </div>



        </div>
    );
};

export default Business;