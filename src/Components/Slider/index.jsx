import './slider.scss';
import 'swiper/scss';
import 'swiper/css/effect-cube';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,EffectCube } from 'swiper/modules';

import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'
import slider4 from './slider4.jpg'

const arr = [
    {
        image: slider1,
        title: 'Неожиданно коты'
    },
    {
        image: slider2,
        title: 'И еще коты'
    },
    {
        image: slider3,
        title: 
        'Опять немного котов'
    },
    {
        image: slider4,
        title: 'И наконец много котов!'
    },
]


function Slider () {
    return (
        <section className='slider'>
            <div className='swiper'>
                <Swiper className='swiper-wrapper'
                   effect={'cube'}
                   cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                //    spaceBetween={20}
                //     slidesPerView={2}
                    grabCursor true
                    loop={true}
                    speed={800}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation,EffectCube]}
                >
                    {arr.map((item) => (
                        <SwiperSlide className='swiper-slide' key={item.image}>
                            <h3 className='slider__subtitle'>{item.title}</h3>
                                <img src={item.image} alt={item.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Slider;
