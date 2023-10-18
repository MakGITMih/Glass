import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Slider from '../Slider';
import MapYandex from '../MapYandex';
import FAQ from '../../ProductPage/FAQ';
import Gallery from '../../ProductPage/Gallery';
import Home from '../../ProductPage/Home';
import Services from '../../ProductPage/Services';
import NotFound from '../../ProductPage/NotFound';


// import '../Styles/index.scss';

function App() {
  return (
    <div className="App">

        <Header></Header>
        {/* <Slider></Slider> */}
        <Routes>
          <Route path='/Glass' element={<Home></Home>}></Route>
          <Route path='/faq' element={<FAQ></FAQ>} ></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      
    </div>
  );
}

export default App;
