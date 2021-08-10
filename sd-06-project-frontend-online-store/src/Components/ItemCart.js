import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  constructor() {
    super();

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
    this.removeCart = this.removeCart.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  decrease() {
    const { quantity } = this.state;
    const zero = 0;
    if (quantity > zero) {
      this.setState({
        quantity: (quantity - 1),
      });
    } else {
      this.setState({
        quantity: 0,
      });
    }
  }

  increase() {
    const { quantity } = this.state;
    this.setState({
      quantity: (quantity + 1),
    });
  }

  removeCart(item) {
    localStorage.removeItem(item);
    document.location.reload();
  }

  render() {
    const { quantity } = this.state;
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    const two = 2;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <div>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p>{ `R$ ${parseFloat(quantity * price).toFixed(two)}` }</p>
        </div>
        <button
          type="button"
          onClick={ this.decrease }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={ this.increase }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          onClick={ () => this.removeCart(product) }
          type="button"
        >
          x
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
      </div>
    );
  }
}

ItemCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCart;
