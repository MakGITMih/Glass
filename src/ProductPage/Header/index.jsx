import './header.scss';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Window } from './window.svg';
import { ReactComponent as Tel } from './tel.svg';
import { ReactComponent as Icon } from './bars.svg';

import Skyscraper from './skyscraper.jpg'
import Fakhverk from './fakhverk.jpg'
import Home from './home.jpg'
import { useState } from 'react';

function Header() {

    const [isOpen, setOpen] = useState();

    return (
        <>
            <header className='header' id='main'>
                <div className='header__container'>
                    {/* <div className='header__wrap-button'> */}
                        <button className='header__menu-button'
                            onClick={() => setOpen(!isOpen)}>
                            <Icon className='header__button-icon'></Icon>
                        </button>
                    {/* </div> */}
                    <div className={`header__wrap-menu ${isOpen ? 'active-menu' : ''}`} >
                        <div className="header__wrap-logo">
                            <Logo className="header__logo"></Logo>
                            <span className="header__name"><b>БЛАНК</b> СТЕКЛО</span>
                        </div>
                        <ul className='header__wrap-paragraph'>
                            <Link to='main' smooth={true} duration={1000}>
                                <NavLink to={'/Glass'} >
                                    <li >Главная</li>
                                </NavLink>
                            </Link>
                            <Link to='glass' smooth={true} duration={1000}>
                                <NavLink to={'/faq'} >
                                    <li>Продукция</li>
                                </NavLink>
                            </Link>
                            <Link to='about' smooth={true} duration={1000}>
                                <NavLink to={''}>
                                    <li >О&nbsp;нас</li>
                                </NavLink>
                            </Link>
                            <Link to='work' smooth={true} duration={1000}>
                                <NavLink to={'/gallery'}>
                                    <li>Наши&nbsp;работы</li>
                                </NavLink>
                            </Link>
                            <Link to='review' smooth={true} duration={1000}>
                                <NavLink to={'/services'}>                               
                                    <li>Отзывы</li>                                   
                                </NavLink>
                            </Link>
                            <Link to='contact' smooth={true} duration={1000}>
                                <NavLink to={'/contact'}>                              
                                    <li>Контакты</li>                                 
                                </NavLink>
                            </Link>
                        </ul>

                    </div>
                    <div className="header__wrap-title">
                        <div className="header__title-projects">
                            <span className="header__title-text">Готовые решения</span>
                        </div>
                        <div className="header__title-building">
                            <span className="header__title-allocation">из стекла</span> <span className="header__title-text">для </span>
                            <span className="header__title-allocation">вашего</span>
                        </div>
                        <div className="header__title-business">
                            <span className="header__title-text">бизнеса</span>
                            </div>
                    </div>
                    <div className="header__wrap-work">
                        <div className="header__block">
                            <div className="header__project">
                                <img src={Fakhverk} alt="" />
                                <span className="header__info">Решения для <span>частного</span><br className="header__br" /><span>строительства</span></span>
                            </div>
                            <div className="header__project">
                                <img src={Home} alt="" />
                                <span className="header__info">Решения для <span>жилого</span><br className="header__br" /> <span>строительства</span></span>
                            </div>
                            <div className="header__project">
                                <img src={Skyscraper} alt="" />
                                <span className="header__info">Решения для <span>коммерческого</span> <br className="header__br" /><span>строительства</span></span>
                            </div>
                        </div>
                        <div className="header__text-block">
                            <a href="tel:+79998887766"> <div className="header__tel"><Tel></Tel></div></a>
                            <div className="header__text-tel">+7 999 888 77 66</div>
                            <div className="header__text-block">
                                <div>Готовые проекты<br />для бизнеса,<br />проверенные на<br />практике </div>
                            </div>
                        </div>

                    </div>
                    <Window className="header__window"></Window>
                </div>
            </header>
        </>
    );
}

export default Header;