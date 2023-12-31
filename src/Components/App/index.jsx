// import { Route, Routes,Link } from 'react-router-dom';

import Header from '../../ProductPage/Header';
import Footer from '../../ProductPage/Footer';
// import Slider from '../Slider';
// import MapYandex from '../MapYandex';
import FAQ from '../../ProductPage/FAQ';
import Gallery from '../../ProductPage/Gallery';
import Team from '../../ProductPage/Team';
import Reviews from '../../ProductPage/Reviews';
// import Services from '../../ProductPage/Services';
// import NotFound from '../../ProductPage/NotFound';


import '../Styles/index.scss';

function App() {
  return (
    <div className="App">

        <Header></Header>
        <FAQ></FAQ>
        <Team></Team>
        <Gallery></Gallery>
          <Reviews></Reviews>
        
        <Footer></Footer>
      
    </div>
  );
}

export default App;


{/* <Routes>
          <Route path='/Glass' element={<Home></Home>}></Route>
          <Route path='/faq' element={<FAQ></FAQ>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes> */}