import React from 'react';
import './style.css';

import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Prateleira from '../../components/prateleira/main';
import News from '../../components/news/news';
import Footer from '../../components/footer/footer';

const Home = () =>{
  return (
    <div className="home">
        <Header/>
        <Banner/>
        <Prateleira />
        <News/>
        <Footer/>
    </div>
    )
}
export default Home;