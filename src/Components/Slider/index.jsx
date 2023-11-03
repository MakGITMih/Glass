import './slider.scss';
import 'swiper/scss';
import 'swiper/css/effect-cube';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube } from 'swiper/modules';

import ava1 from './ava1.jpg'
import ava2 from './ava2.jpg'
import ava3 from './ava3.jpg'
import ava4 from './ava4.jpg'

const arr = [
    {
        image: ava1,
        text: ' Lorem ipsum dolor sit amet consectetur elit. Architecto ut eaque possimus placeat exercitationem reiciendis, expedita quaerat quibusdam sed minima tenetur officia maiores, rerum earum veritatis, nihil laudantium quidem dignissimos!',
        name: 'Петр Овчинников',
        who: 'Фермер'
    },
    {
        image: ava2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi accusamus delectus quisquam soluta perferendis! Laudantium cupiditate obcaecati corporis fugiat,accusamus?',
        name: 'Юлия Евсеева',
        who: 'Менеджер по опту'
    },
    {
        image: ava3,
        text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odit voluptatibus voluptatum ratione inventore placeat reiciendis ea facere! Officiis dignissimos nulla sit a nobis necessitatibus molestias minima neque nemo alias.',
        name: 'Николай Тетерин',
        who: 'Технический надзор'
    },
    {
        image: ava4,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla id recusandae error ad! Quasi itaque rerum quod commodi, sed iusto labore animi vitae qui dolorum, perferendis asperiores nulla quam.',
        name: 'Ульяна Молчанова',
        who: 'Менеджер по закупкам',
    },
]


function Slider() {
    return (
        // <section className='slider'>
            <div className='slider__wrap'>

        <Swiper
             className='swiper-wrapper'
            effect={'cube'}
            cubeEffect={{
                // shadow: true,
                // slideShadows: true,
                // shadowOffset: 20,
                // shadowScale: 0.94,
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
            modules={[Pagination, Navigation, EffectCube]}
          
                
             
        >
            {arr.map((item) => (
                <SwiperSlide key={item.image}>
                    <div className='slider__container'>
                        <div className='slider__wrap-img'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='slider__wrap-text'>
                            <span className='slider__text'>{item.text}</span>
                            <div className='slider__name'>{item.name}</div>
                            <div className='slider__who'>{item.who}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
              </div>
        // </section>
    );
}

export default Slider;
