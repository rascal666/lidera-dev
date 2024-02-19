import './news.scss'
import Card from "./Card";
import img from '../../assets/img/news/news.png'
import img2 from '../../assets/img/news/news2.png'
import img3 from '../../assets/img/news/news3.png'
import img4 from '../../assets/img/news/news4.png'

import { Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

const News = () => {
    return (
        <div className='news'>
            <p className="news__title">
                Новости и анонсы
            </p>

            <div className="news__contain">
                <Swiper
                    modules={[Scrollbar, A11y]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24
                        },
                        480: {
                            slidesPerView: 2.5,
                            spaceBetween: 24
                        },

                        320: {
                            slidesPerView: 1.3,
                            spaceBetween: 16
                        },
                    }}
                >
                    <SwiperSlide>
                        <Card contentBefore='Результаты премии "KMF Isker hanymy 2021" ("Бизнес-леди KMF 2021")' imgUrl={img}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card contentBefore='Результаты премии "KMF Isker hanymy 2021" ("Бизнес-леди KMF 2021")' imgUrl={img2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card contentBefore='Результаты премии "KMF Isker hanymy 2021" ("Бизнес-леди KMF 2021")' imgUrl={img3}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card contentBefore='Результаты премии "KMF Isker hanymy 2021" ("Бизнес-леди KMF 2021")' imgUrl={img4}/>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default News;