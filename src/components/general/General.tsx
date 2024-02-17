import './general.scss'
import Button from "../../ux-ui/button/Button";
import img  from '../../assets/img/home.png'

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import SwiperButtonNext from '../swiper/slideNext'
import SwiperButtonPrev from "../swiper/slidePrev";

const General = () => {


    return (
        <div className='general'>


            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{
                    type: 'bullets',
                    el: '.swiper__pagination',
                    clickable: true,
                }}

            >
                <SwiperSlide>
                    <div className='general__content'>
                        <div className='general__text'>
                            <p className="general__title">KMF <br/> и Фонд KMF-Демеу</p>
                            <p className="general__subtitle">Для нас важно поддерживать социальное
                                предпринимательство</p>
                            <a className='general__buttonWrapper' href="#">
                                <Button className='buttonBorder' text='Подробнее'/>
                            </a>


                        </div>

                        <img className='general__img' src={img} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='general__content'>
                        <div className='general__text'>
                            <p className="general__title">KMF <br/> и Фонд KMF-Демеу</p>
                            <p className="general__subtitle">Для нас важно поддерживать социальное
                                предпринимательство</p>
                            <a className='general__buttonWrapper' href="#">
                                <Button className='buttonBorder' text='Подробнее'/>
                            </a>


                        </div>

                        <img className='general__img' src={img} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='general__content'>
                        <div className='general__text'>
                            <p className="general__title">KMF <br/> и Фонд KMF-Демеу</p>
                            <p className="general__subtitle">Для нас важно поддерживать социальное
                                предпринимательство</p>
                            <a className='general__buttonWrapper' href="#">
                                <Button className='buttonBorder' text='Подробнее'/>
                            </a>
                        </div>

                        <img className='general__img' src={img} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='general__content'>
                        <div className='general__text'>
                            <p className="general__title">KMF <br/> и Фонд KMF-Демеу</p>
                            <p className="general__subtitle">Для нас важно поддерживать социальное
                                предпринимательство</p>
                            <a className='general__buttonWrapper' href="#">
                                <Button className='buttonBorder' text='Подробнее'/>
                            </a>
                        </div>

                        <img className='general__img' src={img} alt=""/>
                    </div>
                </SwiperSlide>

                <div className='swiper__navigation'>
                    <div className='swiper__buttons'>
                        <SwiperButtonPrev/>
                        <SwiperButtonNext />
                    </div>

                    <div className='swiper__pagination'></div>
                </div>
            </Swiper>


        </div>


    );
};

export default General;