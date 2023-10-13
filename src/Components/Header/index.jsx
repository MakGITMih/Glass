import './header.scss';

import { NavLink } from 'react-router-dom';



function Header() {

    return (
        <>
            <header className='header'>
                <ul>
                    <NavLink to={'/'} >
                        <li >Состав проекта</li>
                    </NavLink>
                    <NavLink to={'/faq'} >
                        <li >Отзывы</li>
                    </NavLink>
                    <NavLink to={'/'}>
                    <li >Наши работы</li>
                    </NavLink>
                    <NavLink to={'/gallery'}>
                        <li>О нас</li>
                    </NavLink>
                    <NavLink to={'/services'}>
                        <li>Команда</li>
                    </NavLink>
                    <NavLink to={'/services'}>
                        <li>Контакты</li>
                    </NavLink>
                </ul>
            </header>
        </>
    );
}

export default Header;