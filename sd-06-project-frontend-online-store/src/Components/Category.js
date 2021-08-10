import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Category extends Component {
  render() {
    const { category, id, onClick } = this.props;
    return (
      <label htmlFor={ id }>
        <input
          name={ id } // capturo o name no productList
          type="button"
          data-testid="category"
          id={ id }
          value={ category } // texto dentro de cada button
          onClick={ onClick }
          className="category-input"
        />
        {/* { category } */}
      </label>
    );
  }
}

Category.propTypes = {
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
