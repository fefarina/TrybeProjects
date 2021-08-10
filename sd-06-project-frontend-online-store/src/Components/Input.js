import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { onChange, placeholder } = this.props;
    return (
      <input
        id="query-input"
        data-testid="query-input"
        type="text"
        onChange={ onChange }
        placeholder={ placeholder }
      />
    );
  }
}

Input.propTypes = {
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
};
