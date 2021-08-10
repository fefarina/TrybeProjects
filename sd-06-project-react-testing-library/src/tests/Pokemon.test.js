import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

describe('Testing structure Pokemon.js', () => {
  it('Testa se é renderizado um card com as informações de determinado pokémon.', () => {
    const pikachu = pokemons[0];
    const { getByText, getByTestId, getByRole } = renderWithRouter(<Pokemon
      pokemon={ pikachu }
      isFavorite={ false }
    />);

    const namePokemon = getByText(/Pikachu/i);
    const averagePokemon = getByTestId('pokemon-weight');
    const pikachuWeight = pikachu.averageWeight.value;
    const pikachuUnit = pikachu.averageWeight.measurementUnit;
    const pikachuImg = getByRole('img');

    expect(namePokemon).toBeInTheDocument();
    expect(averagePokemon.innerHTML).toBe(
      `Average weight: ${pikachuWeight} ${pikachuUnit}`,
    );
    expect(pikachuImg.src).toBe('https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pikachuImg.alt).toBe('Pikachu sprite');
    expect(pikachuImg.alt).not.toBe('Bulbassaur sprite');
  });

  it('Testa se o card do Pokémon contém um link de navegação para detalhes', () => {
    const pikachuId = pokemons[0].id;

    const { history, getByTestId, getByAltText, getByText } = renderWithRouter(<App />);

    const pokemonName = pokemons[0].name;
    const button = getByText(/More details/i);

    fireEvent.click(button);

    const urlDetails = history.location.pathname;
    const subtitleDetails = getByText(`${pokemonName} Details`);
    const pokemonType = getByTestId('pokemonType').innerHTML;
    const check = getByText(/Pokémon favoritado?/i);

    fireEvent.click(check);

    const imgFavorite = getByAltText(`${pokemonName} is marked as favorite`);

    expect(pokemonType).toBe('Electric');
    expect(urlDetails).toBe(`/pokemons/${pikachuId}`);
    expect(subtitleDetails).toBeInTheDocument();
    expect(imgFavorite).toBeInTheDocument();
    expect(imgFavorite.src).toEqual(expect.stringContaining('/star-icon.svg'));
  });
});
