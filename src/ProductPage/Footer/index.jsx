import './footer.scss';

import MapYandex from '../../Components/MapYandex';



function Footer() {




  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__title' id='contact'>Контакты</div>
          <div className='footer__wrap-contacts'>
            <div className='footer__contacts'>
              <div className='footer__address'>
                <div className='footer__subtitle'>Офис и производство:</div>
                <div className=''>Ленинградская область</div>
                <div className=''>Всеволожский район</div>
                <div className=''>дер. Кальтино</div>
                <div className=''>оз.Ждановское участок 2а</div>
              </div>
              <div className='footer__address'>
                <div className='footer__subtitle'>График работы:</div>
                <div className=''>Понедельник-пятница: </div>
                <div className=''>с 10-00 до 18-00</div>
                <div className=''>Суббота-воскресенье:</div>
                <div className=''>выходной</div>
              </div>
              <div className='footer__address'>
                <div className='footer__subtitle'>Контакты:</div>
                <div className=''>Телефон:</div>
                <div className=''><a href="tel:+79998887766">+79998887766</a></div>
                <div className=''>Почта:</div>
                <div className=''><a href="mailto:test.ru@gmail.com">test.ru@gmail.com</a></div>
              </div>
              <div className='footer__address'>
                <div className='footer__subtitle'>Обратная связь:</div>
                <div className=''>Если у вас возникли вопросы</div>
                <div className=''>свяжитесь с нами!</div>
                <button className='footer__btn'>Связаться</button>
                
              </div>
             
            </div>
            <div className='footer__map'>
              <MapYandex></MapYandex>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;