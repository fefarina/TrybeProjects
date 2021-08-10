import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class ProductDetailComponent extends Component {
  render() {
    const { product, onClick } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Link to="/shopping-cart">
          <button data-testid="shopping-cart-button" type="button">
            Cart
          </button>
        </Link>
        <div data-testid="product">
          <h5 data-testid="product-detail-name">{ title }</h5>
          <img src={ thumbnail } alt="fotografia do produto" />
          <span>{`R$: ${price}`}</span>
          <p>
            <Button
              testId="product-detail-add-to-cart"
              nameButton="Add to Cart"
              onClick={ onClick }
            />
          </p>
        </div>
      </div>
    );
  }
}

ProductDetailComponent.propTypes = {
  onClick: propTypes.func.isRequired,
  product: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
  }).isRequired,
};

export default ProductDetailComponent;
