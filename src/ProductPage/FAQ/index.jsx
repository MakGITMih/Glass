
import './faq.scss'
import FaqVideo from './glass.mp4'
// import FaqVideo from './stock.mp4'
// import { Link } from 'react-scroll';

import FotoOne from './foto-one.jpg'
import FotoTwo from './foto-two.jpg'
import FotoThree from './foto-three.jpg'


function Faq() {

  return (
    <>
      <div className='faq'>
        <div className='faq__container'>
          <div className='faq__title' id='glass'>Наше стекло</div>
          <div className='faq__block'>
            <div className='faq__wrap-foto'>
              <img className='faq__foto' src={FotoOne} alt="" />
            </div>
            <div className='faq__block-text'>
              <div className='faq__subtitle' >Subtitle One</div>
              <div className='faq__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nam nulla mollitia dolorem, tempore cum. Repellat esse accusamus ea minima possimus, dolorem et repudiandae, ratione officiis facere quaerat dolor sapiente. Impedit sed asperiores provident. Esse aliquid quos tempore quia! Unde, corrupti dolor animi numquam similique non cupiditate tempora error architecto a nam obcaecati aliquam aspernatur reiciendis quod natus sunt rerum?
                Rem veniam inventore minus asperiores in aut pariatur vitae sunt reiciendis ut? Impedit voluptas doloremque dolorem. Quidem nesciunt exercitationem dignissimos esse quas, perspiciatis est soluta maiores cum tenetur debitis. Dolorum.</div>
            </div>
          </div>
          <div className='faq__block'>
            <div className='faq__block-text'>
              <div className='faq__subtitle' >Subtitle Two</div>
              <div className='faq__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nam nulla mollitia dolorem, tempore cum. Repellat esse accusamus ea minima possimus, dolorem et repudiandae, ratione officiis facere quaerat dolor sapiente.Debitis et dignissimos rem praesentium incidunt ducimus ab odit iusto recusandae aliquid, voluptates ipsam magni suscipit a, laudantium ut veritatis. Dolores harum iste molestias dicta fugit consequatur fugiat obcaecati. Quaerat.
                Quis, eveniet libero! Est expedita deleniti molestias cum culpa illo accusantium natus! Voluptas saepe velit fugit. Et suscipit unde pariatur delectus laudantium tenetur nihil, rerum, tempora, nostrum enim iusto autem.
                Ipsum quis, odit consequuntur laudantium animi sint recusandae reiciendis cupiditate, consequatur accusantium at molestiae nulla nam. Nihil officia labore dolore obcaecati incidunt a eaque corrupti, nam, quos voluptatem ab expedita.</div>
            </div>
            <div className='faq__wrap-foto'>
              <img className='faq__foto' src={FotoTwo} alt="" />
            </div>
          </div>
          <div className='faq__block'>
            <div className='faq__wrap-foto'>
              <img className='faq__foto' src={FotoThree} alt="" />
            </div>
            <div className='faq__block-text'>
              <div className='faq__subtitle' >Subtitle Three</div>
              <div className='faq__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum adipisci numquam quasi quis praesentium dolorum deleniti debitis sint vel, labore veniam, est minima esse necessitatibus temporibus voluptates atque consectetur.
                Debitis et dignissimos rem praesentium incidunt ducimus ab odit iusto recusandae aliquid, voluptates ipsam magni suscipit a, laudantium ut veritatis. Dolores harum iste molestias dicta fugit consequatur fugiat obcaecati. Quaerat.
                Quis, eveniet libero! Est expedita deleniti molestias cum culpa illo accusantium natus! Voluptas saepe velit fugit. Et suscipit unde pariatur delectus laudantium tenetur nihil, rerum, tempora, nostrum enim iusto autem.
                Ipsum quis, odit consequuntur laudantium animi sint recusandae reiciendis cupiditate, consequatur accusantium at molestiae nulla nam. Nihil officia labore dolore obcaecati incidunt a eaque corrupti, nam, quos voluptatem ab expedita.
                Accusantium alias quia temporibus debitis, impedit aliquam praesentium corrupti ad? Cumque neque sed laboriosam dolorum optio dolores, fugiat ut ex, vel accusantium voluptatibus ratione expedita. Voluptate id eius neque? Animi.
                Impedit sed asperiores provident. Esse aliquid quos tempore quia! Unde, corrupti dolor animi numquam similique non cupiditate tempora error architecto a nam obcaecati aliquam aspernatur reiciendis quod natus sunt rerum?
                Rem veniam inventore minus asperiores in aut pariatur vitae sunt reiciendis ut? Impedit voluptas doloremque dolorem. Quidem nesciunt exercitationem dignissimos esse quas, perspiciatis est soluta maiores cum tenetur debitis. Dolorum.
                Vero dolor amet soluta impedit, fugit eligendi quas eaque quisquam accusamus odio sunt deleniti architecto laborum quae harum magnam pariatur possimus quia odit, consequatur ducimus dolorum sapiente minus. Fugiat, facilis!
                Ipsum ducimus dolorum alias accusamus laborum! Incidunt minima laborum molestias dicta ipsam, commodi tenetur nulla officiis, obcaecati, consectetur sunt quod sapiente quaerat consequuntur quidem soluta aliquam accusamus vel facilis cum.
                Quae labore, assumenda doloremque modi maiores magnam sit.
              </div>
            </div>
          </div>
        </div>
            <div className="faq__video"> <video className="faq__video"
                src={FaqVideo}
            autoPlay loop muted
            ></video></div>
      </div>
    </>
  );
}

export default Faq;