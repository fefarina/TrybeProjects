import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange({ target }) {
    const { name } = target;

    this.setState({ [name]: target.value });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">Título
            <input
              data-testid="title-input" value={this.state.title}
              type="text" name="title" onChange={this.handleChange}
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">Subtítulo
          <input
            data-testid="subtitle-input" value={this.state.subtitle} type="text"
            name="subtitle" onChange={this.handleChange}
          />
          </label>
          <label data-testid="image-input-label" htmlFor="image">Imagem
          <input
            data-testid="image-input" value={this.state.imagePath} type="text"
            name="imagePath" onChange={this.handleChange}
          />
          </label>
          <label data-testid="storyline-input-label" htmlFor="sinopse">Sinopse
          <textarea
            data-testid="storyline-input" value={this.state.storyline} type="text"
            name="storyline" onChange={this.handleChange}
          />
          </label>
          <label data-testid="rating-input-label" htmlFor="avaliator">Avaliação
          <input
            data-testid="rating-input" value={this.state.rating} type="number"
            name="rating" onChange={this.handleChange}
          />
          </label>
          <label data-testid="genre-input-label" htmlFor="gender">Gênero
          <select
            data-testid="genre-input" value={this.state.genre} name="genre"
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          </label>
          <button type="button" data-testid="send-button" onClick={this.onClick}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.defaultProps = { onClick: '' };

AddMovie.propTypes = { onClick: PropTypes.string };

export default AddMovie;
