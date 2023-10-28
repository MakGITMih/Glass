import './reviews.scss'
import Slider from '../../Components/Slider/index';
import { ReactComponent as Dekor } from './dekor.svg';

function Reviews() {


    return (
        <section className='reviews'>
            <div className='reviews__container'>
                <div className='reviews__title' id='review'>Отзывы заказчиков</div>
                <div className='reviews__wrap-block'>
                <div className='reviews__text'>Про клиентоориентированность: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis saepe quo dolor adipisci ut nemo impedit, facere inventore? Repellat asperiores molestias nam saepe odit molestiae sit quis neque modi?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis saepe quo dolor adipisci ut nemo impedit, facere inventore? Repellat asperiores molestias nam saepe odit molestiae sit quis neque modi?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis saepe quo dolor adipisci ut nemo impedit, facere inventore? Repellat asperiores molestias nam saepe odit molestiae sit quis neque modi?
                </div>
                <div className='reviews__slider'>
                    <Slider></Slider>
                </div>
                </div>
                <Dekor className='reviews__decor-one'></Dekor>
            </div>
           
        </section>
    );
}

export default Reviews;

