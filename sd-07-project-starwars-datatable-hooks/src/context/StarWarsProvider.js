import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchPlanets from '../services/api';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataApi, setDataApi] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{}],
  });

  const [numeric, setNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleFetch = async () => {
    const planets = await fetchPlanets();
    setData(planets.results);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    setDataApi(data);
  }, [data]);

  const resetFilter = () => {
    setNumeric({
      column: '',
      value: '',
      comparison: '',
    });
    setDataApi(data);
  };

  const handleClick = () => {
    const initialColumn = numeric.column;

    setDataApi(
      dataApi.filter((item) => {
        switch (numeric.comparison) {
        case 'maior que':
          return Number(item[initialColumn]) > Number(numeric.value);
        case 'menor que':
          return Number(item[initialColumn]) < Number(numeric.value);
        case 'igual a':
          return Number(item[initialColumn]) === Number(numeric.value);
        default:
          return true;
        }
      }),
    );
  };

  const context = {
    data,
    setData,
    filters,
    setFilters,
    numeric,
    setNumeric,
    handleClick,
    dataApi,
    setDataApi,
    resetFilter,
  };

  return (
    <main>
      <StarWarsContext.Provider value={ context }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
