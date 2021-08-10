import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
        />
        <header>
          <p hidden data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </header>
        <main className="homepage-main">
          <nav className="homepage-nav">
            <h2>Projeto Agile Store</h2>
            <Link to="/shopping-cart">
              <button data-testid="shopping-cart-button" type="button">
                <i className="fa fa-shopping-cart" />
              </button>
            </Link>
          </nav>
          <ProductList />
        </main>
      </div>
    );
  }
}

export default HomePage;
