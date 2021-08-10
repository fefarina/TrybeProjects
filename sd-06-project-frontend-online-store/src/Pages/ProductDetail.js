import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProductDetailComponent from '../Components/ProductDetailComponent';

class ProductDetails extends Component {
  constructor() {
    super();

    this.onClickCart = this.onClickCart.bind(this);

    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  }

  onClickCart(prod) {
    const { cart } = this.state;
    cart.push(prod);
    this.setState({
      cart,
    });

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const { match, location } = this.props;
    const { params } = match;
    const { idprod } = params;
    const { busca } = location.state;
    const arr = busca.filter((num) => num.id === idprod);
    return (
      <div>
        {arr.map((item) => (
          <ProductDetailComponent
            onClick={ () => this.onClickCart(item) }
            product={ item }
            key={ item.id }
          />))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: propTypes.shape().isRequired,
  location: propTypes.shape().isRequired,
};

export default ProductDetails;
