import './team.scss'

import Industrial from './Industrial.jpg'
import Financial from './financial.jpg'
import Executive from './executive.jpg'

import { ReactComponent as Dekor } from './dekor.svg';
import { ReactComponent as Check } from './check.svg';

function Team() {
    return (
        <>
         <div className='test'>
            <section className="team">
               
                <div className='team__container'>
                    <span className='team__title' id='about'>О нас</span>
                    <span className='team__about'>В целом мы без всякого сомнения хороши! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veniam reprehenderit, repellat tempora modi ratione. Quis recusandae, ut tempore nostrum autem qui facilis, tempora id, odio eligendi ipsum totam voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veniam reprehenderit, repellat tempora modi ratione. Quis recusandae, ut tempore nostrum autem qui facilis, tempora id, odio eligendi ipsum totam voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veniam reprehenderit, repellat tempora modi ratione. Quis recusandae, ut tempore nostrum autem qui facilis, tempora id, odio eligendi ipsum totam voluptate.Quis recusandae, ut tempore nostrum autem qui facilis, tempora id, odio eligendi ipsum totam voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veniam reprehenderit, repellat tempora modi ratione. Quis recusandae, ut tempore nostrum autem qui facilis, tempora id, odio eligendi ipsum totam voluptate.</span>
                    <div className='team__wrap-advantage'>
                        <div className='team__advantage'>
                            <div className='team__check'><Check></Check></div>
                            <div className='team__text-advantage'>
                                Работаем на рынке уже 15+ лет, а общий стаж сотрудников составляет 90 лет</div>
                        </div>
                        <div className='team__advantage'>
                            <div className='team__check'><Check></Check></div>
                            <div className='team__text-advantage'>
                            Все специалисты с высшим образованием и опытом работы lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className='team__advantage'>
                            <div className='team__check'><Check></Check></div>
                            <div className='team__text-advantage'>
                            По нашим проектам построено свыше lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className='team__advantage'>
                            <div className='team__check'><Check></Check></div>
                            <div className='team__text-advantage'>
                            Заказав проект, вы lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>

                    </div>
                    <div className='team__wrap-block'>
                        <div className='team__block'>
                            <div className='team__wrap-img'>
                                <img src={Financial} alt="" />
                            </div>
                            <div className='team__name'>Светлана Дружинина</div>
                            <div className='team__job'>Финансовый директор</div>
                            <div className='team__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quasi ipsum, velit necessitatibus, commodi unde dicta, soluta minus labore amet tempora eveniet nisi alias expedita! Voluptates hic explicabo dolores similique?</div>
                        </div>
                        <div className='team__block'>
                            <div className='team__wrap-img'>
                                <img src={Industrial} alt="" />
                            </div>
                            <div className='team__name'>Сергей Капустин </div>
                            <div className='team__job'>Технический директор</div>
                            <div className='team__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis libero neque non ratione unde possimus! Incidunt explicabo veniam facere assumenda exercitationem ex aperiam omnis modi consectetur. Dignissimos esse tenetur laborum!Reiciendis libero neque non ratione unde possimus! Incidunt explicabo veniam facere assumenda exercitationem ex aperiam omnis modi consectetur. Dignissimos esse tenetur laborum!</div>
                        </div>
                        <div className='team__block'>
                            <div className='team__wrap-img'>
                                <img src={Executive} alt="" />
                            </div>
                            <div className='team__name'>Василий Михеев</div>
                            <div className='team__job'>Исполнительный директор</div>
                            <div className='team__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda voluptatum accusantium nesciunt distinctio. Debitis repellendus labore, obcaecati voluptatibus quis nesciunt expedita quos veniam cum, aspernatur, ducimus temporibus facere commodi?</div>
                        </div>
                    </div>

                    <Dekor className='team__decor-one'></Dekor>
                    <Dekor className='team__decor-two'></Dekor>
                </div>
               
            </section>
            </div>
        </>
    );
}

export default Team;