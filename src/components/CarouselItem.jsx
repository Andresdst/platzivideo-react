import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';

import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { id, title, cover, year, duration, contentRating } = props;

  const handleSetFavorite = () => {
    props.setFavorite({ id, title, cover, year, duration, contentRating });
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={play} alt='Play Icon' />
          <img className='carousel-item__details--img' onClick={handleSetFavorite} src={plus} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  duration: PropTypes.number,
  contentRating: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
