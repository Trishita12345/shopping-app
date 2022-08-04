import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewsLetter from '../../components/NewsLetter';
import Promo from '../../components/Promo';

export const shoppingAppDisplayFunc = () => (
  <div>
    <Header />
    <Promo />
    <NewsLetter />
    <Footer />
    {/* <ImgSlider/> */}
  </div>
);
