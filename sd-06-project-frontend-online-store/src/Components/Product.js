import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Button from './Button';

class Product extends Component {
  handleShipping(shipping) {
    if (shipping.free_shipping === true) {
      return <p data-testid="free-shipping">Frete Grátis</p>;
    }
  }

  render() {
    const { product, search, onClick } = this.props;
    const { title, thumbnail, price, id, shipping } = product;

    return (
      <div className="product-list-each">
        <Link
          to={ {
            pathname: `/product-detail/${id}`,
            state: {
              busca: search,
            },
          } }
        >
          <div data-testid="product-detail-link">
            <div data-testid="product">
              <h5>{ title }</h5>
              <img src={ thumbnail } alt="fotografia do produto" />
              { this.handleShipping(shipping) }
            </div>
            <p><span>{`R$: ${price}`}</span></p>
          </div>
        </Link>
        <p>
          <Button
            testId="product-add-to-cart"
            nameButton="Add to Cart"
            onClick={ onClick }
          />
        </p>
      </div>
    );
  }
}

Product.propTypes = {
  onClick: propTypes.func.isRequired,
  search: propTypes.instanceOf(Array).isRequired,
  product: propTypes.shape({
    title: propTypes.string,
    thumbnail: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
    shipping: propTypes.object,
  }).isRequired,
};

export default Product;
