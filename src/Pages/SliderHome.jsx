import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './SliderHome.css';

import { useTranslation } from 'react-i18next';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function SliderHome() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <Swiper
                dir={i18n.dir()}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                // loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                key={i18n.dir()}
            >
                <SwiperSlide>
                    <div>
                        <img src="images/4.jpg" width={'400px'} alt="a" />
                        <Link to={'#'} className='scale-box btn btn-xxs mb-3 rounded-s font-700 shadow-s bg-highlight btn-slider'>{t('Go to')}</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="images/4.jpg" width={'400px'} alt="a" />
                        <Link to={'#'} className='scale-box btn btn-xxs mb-3 rounded-s font-700 shadow-s bg-highlight btn-slider'>{t('Go to')}</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="images/4.jpg" width={'400px'} alt="a" />
                        <Link to={'#'} className='scale-box btn btn-xxs mb-3 rounded-s font-700 shadow-s bg-highlight btn-slider'>{t('Go to')}</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
