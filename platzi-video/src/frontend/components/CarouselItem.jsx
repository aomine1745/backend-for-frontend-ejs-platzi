import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addFavorite, removeFavorite } from '../actions';

import play from '../assets/img/play-icon.png';
import plus from '../assets/img/plus-icon.png';
import remove from '../assets/img/remove-icon.webp';

const CarouselItem = ({ _id, id, cover, title, year, contentRating, duration, userMovieId, inMyList, addFavorite, removeFavorite, isMyList }) => {
  function handleSetFavorite() {
    if (inMyList) {
      alert('this movie is already set in favorites.');
      return;
    }
    addFavorite({ _id, id, cover, title, year, contentRating, duration });
  }

  function handleDeleteFavorite() {
    removeFavorite(userMovieId);
  }

  return (
    <div className='Carousel__item'>
      <img className='Carousel__item-img' src={cover} alt={title} />
      <div className='Carousel__details'>
        <div className='Carousel__details-actionBox'>
          <Link to={`/player/${id}`}>
            <img
              className='Carousel__details-action'
              src={play}
              alt='Play Icon'
            />
          </Link>
          {!isMyList ? (
            <img
              className='Carousel__details-action'
              src={plus}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          ) : (
            <img
              className='Carousel__details-action'
              src={remove}
              alt='Remove Icon'
              onClick={handleDeleteFavorite}
            />
          )}
        </div>
        <p className='Carousel__details-title'>{ title }</p>
        <p className='Carousel__details-subtitle'>{ `${year} ${contentRating} ${duration}` }</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  addFavorite,
  removeFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
