import './header.scss';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Window } from './window.svg';
import { ReactComponent as Tel } from './tel.svg';

import Skyscraper from './skyscraper.jpg'
import Fakhverk from './fakhverk.jpg'
import Home from './home.jpg'

function Header() {

    return (
        <>
            <header className='header'>
                <div className='header__container'>
                    <div className="header__wrap-menu">
                        <div className="header__wrap-logo">
                            <Logo className="header__logo"></Logo>
                            <span className="header__name"><b>БЛАНК</b> СТЕКЛО</span>
                        </div>
                        <ul className='header__wrap-paragraph'>
                            <NavLink to={'/Glass'} >
                                <li >Главная</li>
                            </NavLink>
                            <NavLink to={'/faq'} >
                                <Link to='glass' smooth={true} duration = {1000}>
                                    <li>Про стекло</li>
                                    </Link>
                            </NavLink>
                            <NavLink to={''}>
                               <Link to='about' smooth={true} duration = {1000}>
                                <li >О нас</li>
                                </Link>
                            </NavLink>
                            <NavLink to={'/gallery'}>
                                <li>Наши работы</li>
                            </NavLink>
                            <NavLink to={'/services'}>
                                <li>Отзывы</li>
                            </NavLink>
                            <NavLink to={''}>
                                <li>Контакты</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="header__wrap-title">
                        <div className="header__title-projects">Готовые решения</div>
                        <div className="header__title-building">
                            <span className="header__title-allocation">из стекла</span> для <span className="header__title-allocation">вашего</span></div>
                        <div className="header__title-business">бизнеса</div>
                    </div>
                    <div className="header__wrap-work">
                        <div className="header__block">
                            <div className="header__project">
                                <img src={Fakhverk} alt="" />
                                <span className="header__info">Решения  для <span>частного</span><br className="header__br"/><span>строительства</span></span>
                            </div>
                            <div className="header__project">
                                <img src={Home} alt="" />
                                <span className="header__info">Решения  для <span>жилого</span><br className="header__br"/> <span>строительства</span></span>
                            </div>
                            <div className="header__project">
                                <img src={Skyscraper} alt="" />
                                <div className="header__info">Решения  для <span>коммерческого</span> <br className="header__br"/><span>строительства</span></div>
                            </div>
                        </div>
                        <div className="header__text-block">
                         <a href="tel:+79998887766"> <div className="header__tel"><Tel></Tel></div></a>
                            <div className="header__text-block">
                                <div>Готовые проекты<br/>для бизнеса,<br/>проверенные на<br/>практике </div>
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