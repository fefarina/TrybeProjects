import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from '../Components/Product';
import CategoriesList from './CategoriesList';
import Input from '../Components/Input';
import Button from '../Components/Button';

class ProductList extends Component {
  constructor() {
    super();

    this.onClickButton = this.onClickButton.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onClickCategory = this.onClickCategory.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onClickCart = this.onClickCart.bind(this);

    this.state = {
      valueInput: '',
      categoryId: '',
      products: [],
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

  async onClickCategory(categoriesId) {
    const { valueInput } = this.state;
    const getAll = await getProductsFromCategoryAndQuery(categoriesId, valueInput);
    this.setState({
      categoryId: categoriesId,
      products: getAll.results,
    });
  }

  async onClickButton(valueOfInput) {
    await this.resetState();
    const { categoryId } = this.state;
    const getCategories = await getProductsFromCategoryAndQuery(categoryId, valueOfInput);
    const { results } = getCategories;
    this.setState({
      valueInput: valueOfInput,
      products: results,
    });
  }

  handleInput(event) {
    const input = event.target.value;
    this.setState({ valueInput: input });
  }

  async resetState() {
    this.setState({
      categoryId: '',
    });
  }

  render() {
    const { products, valueInput } = this.state;
    return (
      <div>
        <div className="product-list-container">
          <div className="product-list-input">
            <Input
              onChange={ this.handleInput }
              placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
            />
          </div>
          <div className="product-list-button">
            <Button
              testId="query-button"
              nameButton="Buscar"
              onClick={ () => this.onClickButton(valueInput) }
            />
          </div>
        </div>
        <section className="product-list-section">
          <section className="product-list-categories">
            <h4>Categorias</h4>
            <CategoriesList
              onClick={ (event) => this.onClickCategory(event.target.name) }
            />
          </section>
          <section className="product-list-all-products">
            { products.map((prod) => (
              <div key={ prod.id }>
                <Product
                  product={ prod }
                  search={ products }
                  onClick={ () => this.onClickCart(prod) }
                />
              </div>
            ))}
          </section>
        </section>
      </div>
    );
  }
}

export default ProductList;
