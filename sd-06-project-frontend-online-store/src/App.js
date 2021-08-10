import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ShoppingCart from './Components/ShoppingCart';
import ProductDetail from './Pages/ProductDetail';
import './HomePage.css';
import './ProductList.css';
import './ShoppingCart.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/product-detail/:idprod"
          render={ (props) => <ProductDetail { ...props } /> }
        />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/" component={ HomePage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
