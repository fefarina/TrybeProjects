import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.add = this.add.bind(this);
    this.handletext = this.handletext.bind(this);
    this.handleMarked = this.handleMarked.bind(this);
    this.handleGender = this.handleGender.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handletext({ target }) {
    const { name } = target;

    this.setState({
      [name]: target.value,
      movies: movies.filter((movie) =>
        movie.title === target.value ||
        movie.subtitle === target.value ||
        movie.storyline === target.value,
      ),
    });
  }

  handleMarked({ target }) {
    const { name } = target;

    this.setState({
      [name]: target.value,
      movies: movies.filter((movie) => {
        if (target.value === 'on') {
          return movie.bookmarked === true;
        }
        return movies;
      }),
    });
  }

  handleGender({ target }) {
    const { name } = target;

    this.setState({
      [name]: target.value,
      movies: movies.filter((movie) => {
        if (target.value === '') {
          return movies;
        }
        return movie.genre === target.value;
      }),
    });
  }


  add(movie) {
    this.setState({ movies: [...this.state.movies, movie] });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
          onSearchTextChange={this.handletext}
          onBookmarkedChange={this.handleMarked}
          onSelectedGenreChange={this.handleGender}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.add} />
      </div>
    );
  }
}

MovieLibrary.defaultProps = { movies: '' };

MovieLibrary.propTypes = { movies: PropTypes.string };

export default MovieLibrary;
