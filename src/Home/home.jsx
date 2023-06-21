import React from 'react';
import Gallery from '../composant/gallery/gallery';
import "../Home/home.scss";
import BannerPages from '../composant/banner-page/banner-pages';

const Home = () => {

    const imagePath = process.env.PUBLIC_URL + '/kasa/jpeg-header.jpg';
    const className = "banner-home";
    const text = 'Chez vous, partout et ailleurs';

  return (
    <div className='main'>
      <BannerPages imagePath={imagePath} className={className} text={text}/>
      <Gallery/>
    </div>
  );
};

export default Home;
