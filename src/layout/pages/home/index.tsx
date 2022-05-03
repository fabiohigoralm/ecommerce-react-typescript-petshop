import React from 'react';
import { BannerShelf } from '../../components/bannerShelf';
import { Category } from '../../components/category';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
//import { ProductsNews } from '../../components/newsss';
import { NewsLetter } from '../../components/newsLetter';
import { ShowcasesSlider } from '../../components/showcases';
import {ProductsNewsSlider} from '../../components/news';
import { BannerShelfMain } from '../../components/bannerMain/intex';



export const Home = () => {
  return (
    
   
  <>
      <Header />
      <Menu />
      <BannerShelfMain/>
      <Category />
      <ProductsNewsSlider/>
      <BannerShelf/>
      <ShowcasesSlider/>
      <NewsLetter/> 
     <Footer/>
      
    </>
    
    
  );
};
