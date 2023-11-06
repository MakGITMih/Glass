import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './email.scss'


function Email() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_olbddlw', 'template_r9trjsq', form.current,'DbXjlGnWshk_pXCED')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <form className='form' ref={form} onSubmit={sendEmail}>
            <div className='form__wrap'>
                <label className='form__title' for='text'>Имя</label>
                <input className='form__text' type="text" id="text" name="from_name" 
                placeholder='Укажите ваше имя'/>
            </div>
            <div className='form__wrap'>
                <label className='form__title' for='email'>Почта</label>
                <input className='form__text' type="email" id="email" name="from_email" placeholder='Укажите вашу почту'/>
            </div>
            <div className='form__wrap'>
                <label className='form__title' for='message'>Сообщение</label>
                <textarea className='form__textarea' name="message" id="message" placeholder=
                // 'Оставьте ваше сообщение'
                'Отправка формы на почту работает! Просто кнопка временно отключена (:'
                /> 
            </div>
            <div className='form__wrap-btn'>
                <div className='form__wrap-reset'>
                    <input className='form__reset' type="reset" value="Очистить" />
                </div>
                <div className='form__wrap-submit'>
                    <input className='form__submit'disabled type="submit" value="Отправить" />
                </div>
            </div>
        </form>
    );
};

export default Email;