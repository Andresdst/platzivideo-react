import React from 'react';
import PropTypes from 'prop-types';

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

CarouselItem.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  duration: PropTypes.number,
  contentRanking: PropTypes.string,
};

export default CarouselItem;
