import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as api from '../services/api';
import Loading from '../services/Loading';
import Category from '../Components/Category';

export default class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const { getCategories } = api;
    const category = await getCategories();
    this.setNewState(category);
  }

  setNewState(newState) {
    this.setState({
      list: newState,
      loading: true,
    });
  }

  render() {
    const { onClick } = this.props;
    const { list, loading } = this.state;
    if (loading === false) return <Loading />;
    return (
      <ul>
        {list.map((eachCat) => (
          <p key={ eachCat.id }>
            <Category id={ eachCat.id } category={ eachCat.name } onClick={ onClick } />
          </p>
        ))}
      </ul>
    );
  }
}

CategoriesList.propTypes = { onClick: propTypes.func.isRequired };
