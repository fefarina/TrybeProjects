import React from 'react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';

describe('Testing structure FavoritePokemon.js', () => {
  it('Testa se é exibido na tela "No Favorite Pokemon found"', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons
      pokemons={ [] }
    />);

    const noFavorite = getByText(/No favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });

  it('Testa se é exibido todos os cards de pokemons favoritados', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons
      pokemons={ pokemons }
    />);

    const favorite = getByText(/Pikachu/i);
    expect(favorite).toBeInTheDocument();
  });

  it('Testa se é exibido todos os cards de pokemons favoritados', () => {
    const { queryByText } = renderWithRouter(<FavoritePokemons
      pokemons={ [pokemons[0]] }
    />);

    const favorite = queryByText(/Charmander/i);
    expect(favorite).not.toBeInTheDocument();
  });
});
