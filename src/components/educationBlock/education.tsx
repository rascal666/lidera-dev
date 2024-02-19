import './education.scss'
import Card from "./Card";
import { Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

const Education = () => {
    return (
        <div className='education'>
            <p className="education__title">Обучение</p>

            <div className="education__contain">
                <Swiper
                    modules={[Scrollbar, A11y]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        },
                        320: {
                            slidesPerView: 1.3,
                            spaceBetween: 24
                        },
                    }}
                >
                    <SwiperSlide>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card/>
                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    );
};

export default Education;