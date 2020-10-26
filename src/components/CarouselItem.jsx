import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';

import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';
import remove from '../assets/static/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76 (1).png';

const CarouselItem = (props) => {
  const { id, title, cover, year, duration, contentRating } = props;

  const handleSetFavorite = () => {
    props.setFavorite({ id, title, cover, year, duration, contentRating });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={play} alt='Play Icon' />
          <img className='carousel-item__details--img' onClick={handleSetFavorite} src={plus} alt='Plus Icon' />
          <img className='carousel-item__details--img' onClick={() => handleDeleteFavorite(id)} src={remove} alt='Plus Icon' />
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
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
