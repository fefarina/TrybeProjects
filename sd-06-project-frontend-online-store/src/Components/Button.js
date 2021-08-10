import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick, nameButton, testId } = this.props;
    return (
      <button
        data-testid={ testId }
        type="button"
        onClick={ onClick }
      >
        {nameButton}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  nameButton: propTypes.string.isRequired,
  testId: propTypes.string.isRequired,
};
