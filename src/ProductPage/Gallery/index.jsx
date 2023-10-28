import './gallery.scss'
import SliderWork from '../../Components/SliderWork/index.jsx';

function Gallery() {
    return (
        <>
            <section className="gallery">
                <div className="gallery__container">
            <div className="gallery__title" id = 'work'>
               Наши работы
                  </div>
                  <SliderWork></SliderWork> 
                  </div>
            </section>
        </>
    );
}

export default Gallery;