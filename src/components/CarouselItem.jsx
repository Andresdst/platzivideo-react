import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';

const CarouselItem = ({ title, cover, year, duration, contentRanking }) => {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={play} alt='Play Icon' />
          <img className='carousel-item__details--img' src={plus} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRanking} ${duration} minutos`}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
