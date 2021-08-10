import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div>
        <div>
          <img src={imagePath} alt="Imagem do Filme" />
        </div>
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

MovieCard.defaultProps = { movie: '' };

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
