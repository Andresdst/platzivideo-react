import React from 'react';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState/'

const App = () => {

  const initialState = useInitialState(API)
  console.log(initialState)
  return (
    <div className='App'>

      <Header />
      <Searcher />

      <Categories title='Mi lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Destacados'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Favoritos'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>

  );
};

export default App;
