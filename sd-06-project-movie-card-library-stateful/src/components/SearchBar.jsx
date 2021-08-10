import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        value={selectedGenre} name="selectedGenre"
        onChange={onSelectedGenreChange} data-testid="select-input"
      >
        <option value="" data-testid="select-option" id="select-genre">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="include">Inclui o texto:
        <input
          type="text" value={searchText} id="include" name="searchText"
          onChange={onSearchTextChange} data-testid="text-input"
        />
        </label>
        <label data-testid="checkbox-input-label" HtmlFor="favorite">
          Mostrar somente favoritos
        <input
          type="checkbox" checked={bookmarkedOnly} id="favorite" name="bookmarkedOnly"
          onChange={onBookmarkedChange} data-testid="checkbox-input"
        />
        </label>
        <label data-testid="select-input-label" htmlFor="gender">
          Filtrar por gênero
        {this.renderSelect()}
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.number.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;
