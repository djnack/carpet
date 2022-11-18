import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper";

import Post from './index';
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from './Post4';

import { useTranslation } from 'react-i18next';

function CategoryOne() {

    const { t,i18n } = useTranslation();

    return (
        <>
            <div className="content mb-2 m-0">
                <div className="d-flex">
                    <div className="align-self-center">
                        <h1 className="mb-0 font-18">{t('Category')}</h1>
                    </div>
                    <div className="ms-auto align-self-center">
                        <a href="#" className="float-end font-12 font-400">{t('See All')}</a>
                    </div>
                </div>
            </div>
            <Swiper
                dir={i18n.dir()}
                slidesPerView={1.2}
                // spaceBetween={5}
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 1.2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2.2,
                    },
                    992: {
                        width: 992,
                        slidesPerView: 3.2,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 3.2,
                    },
                    1400: {
                        width: 1400,
                        slidesPerView: 4.2,
                    },
                }}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                key={i18n.dir()}
            >
                <SwiperSlide><Post2 /></SwiperSlide>
                <SwiperSlide><Post4 /></SwiperSlide>
                <SwiperSlide><Post /></SwiperSlide>
                <SwiperSlide><Post3 /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default CategoryOne;