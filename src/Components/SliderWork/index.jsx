
import 'swiper/scss';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './sliderwork.scss';



// import 'swiper/css';


import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, EffectCoverflow} from 'swiper/modules';

import ava1 from './ava1.jpg'
import ava2 from './ava2.jpg'
import ava3 from './ava3.jpg'
import ava4 from './ava4.jpg'
import ava5 from './ava5.jpg'
import ava6 from './ava6.jpg'

const arr = [
    {
        image: ava1,
        title: 'Автосалон',
    },
    {
        image: ava2,
        title: 'Дом Сергея Капустина',
    },
    {
        image: ava3,
        title: 'Бизнес центр',
    },
    {
        image: ava4,
        title: 'Бизнес класс',
    },
    {
        image: ava5,
        title: 'Комфорт класс',
    },
    {
        image: ava6,
        title: 'Торговый центр',
    },
]


function SliderWork() {
    return (
        // <section className='slider'>
        //     <div className='swiper'>

        <Swiper
             className='swiper width'
               spaceBetween={10}
            breakpoints={{
                768: {
                  slidesPerView:2,
                  spaceBetween: 10,
                },
                // 768: {
                //   slidesPerView:1,
                //   spaceBetween: 40,
                // },
                // 1024: {
                //   slidesPerView: 2,
                //   spaceBetween: 10,
                // },
              }}

            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            // slidesPerView={2}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            loop={true}
            speed={1000}
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation, EffectCoverflow]}
        >
            {arr.map((item) => (
                <SwiperSlide key={item.image}>
                    <div className='sliderwork__container'>
                        <div className='sliderwork__wrap-imges'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='sliderwork__title'>{item.title}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        //     </div>
        // </section>
    );
}

export default SliderWork;
