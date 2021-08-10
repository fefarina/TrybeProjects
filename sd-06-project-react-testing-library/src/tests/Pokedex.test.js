import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import Pokedex from '../components/Pokedex';

describe('Testing structure Pokedex.js', () => {
  it('Testa se é exibido o próximo Pokémon quando o botão Próximo é clicado', () => {
    const pikachu = pokemons[0].id;
    const charmander = pokemons[1].id;

    const { getByText, getByRole } = renderWithRouter(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pikachu]: false, [charmander]: false } }
    />);

    const button = getByRole('button', { name: /Próximo pokémon/i });

    fireEvent.click(button);

    const h2 = getByText('Encountered pokémons');
    const second = getByText(/Charmander/i);
    expect(second).toBeInTheDocument();
    expect(button.innerHTML).toMatch(/Próximo pokémon/i);
    expect(button).toBeInTheDocument();
    expect(h2).toBeInTheDocument();

    fireEvent.click(button);

    const first = getByText(/Pikachu/i);
    expect(first).toBeInTheDocument();
  });

  it('Testa se é mostrado apenas um Pokémon por vez', () => {
    const pikachu = pokemons[0].id;
    const charmander = pokemons[1].id;

    const { getByRole, container } = renderWithRouter(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pikachu]: false, [charmander]: false } }
    />);

    const one = 1;
    const card = container.querySelectorAll('.pokedex');
    const button = getByRole('button', { name: /Próximo pokémon/i });
    expect(card.length).toBe(one);

    fireEvent.click(button);
    expect(card.length).toBe(one);
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    const pikachu = pokemons[0].id;
    const charmander = pokemons[1].id;

    const { getAllByRole, getByRole, getByText } = renderWithRouter(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pikachu]: false, [charmander]: false } }
    />);

    const four = 4;
    const buttons = getAllByRole('button');
    const fire = getByRole('button', { name: /Fire/i });
    const eletric = getByRole('button', { name: /Electric/i });

    expect(buttons.length).toBe(four);
    expect(fire).toBeInTheDocument();
    expect(eletric).toBeInTheDocument();

    fireEvent.click(fire);
    const firePokemon = getByText(/Charmander/i);
    expect(firePokemon).toBeInTheDocument();

    fireEvent.click(eletric);
    const eletricPokemon = getByText(/Pikachu/i);
    expect(eletricPokemon).toBeInTheDocument();
  });

  it('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    const pikachu = pokemons[0].id;
    const charmander = pokemons[1].id;

    const { getByRole, getByText } = renderWithRouter(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pikachu]: false, [charmander]: false } }
    />);

    const resetButton = getByRole('button', { name: /All/i });
    expect(resetButton).toBeInTheDocument();

    const nextButton = getByRole('button', { name: /Próximo pokémon/i });

    fireEvent.click(nextButton);
    const second = getByText(/Charmander/i);
    expect(second).toBeInTheDocument();

    fireEvent.click(resetButton);
    const first = getByText(/Pikachu/i);
    expect(first).toBeInTheDocument();
  });

  it('Testa se é criado um botão de filtro para cada tipo de Pokémon.', () => {
    const pikachu = pokemons[0].id;
    const charmander = pokemons[1].id;
    const mew = pokemons[5].id;
    const snorlax = pokemons[7].id;

    const {
      getByRole,
      queryByText,
      getAllByRole,
      getAllByTestId,
    } = renderWithRouter(<Pokedex
      pokemons={ [pokemons[0], pokemons[1], pokemons[4], pokemons[7]] }
      isPokemonFavoriteById={ {
        [pikachu]: false,
        [charmander]: false,
        [mew]: false,
        [snorlax]: false,
      } }
    />);

    const eletricButton = getByRole('button', { name: /Electric/i });
    const fireButton = getByRole('button', { name: /Fire/i });
    const psychicButton = getByRole('button', { name: /Psychic/i });
    const normalButton = getByRole('button', { name: /Normal/i });
    const dragonButton = queryByText(/Dragon/i);
    const allButton = getByRole('button', { name: /All/i });
    const allButtons = getAllByRole('button');
    const enabled = getByRole('button', { name: /Próximo Pokémon/i });
    const typeButtons = 4;
    const buttons = 6;
    const types = getAllByTestId('pokemon-type-button');

    expect(allButtons.length).toBe(buttons);
    expect(eletricButton).toBeInTheDocument();
    expect(fireButton).toBeInTheDocument();
    expect(psychicButton).toBeInTheDocument();
    expect(dragonButton).not.toBeInTheDocument();
    expect(normalButton).toBeInTheDocument();
    expect(allButton).toBeInTheDocument();
    expect(enabled).toBeEnabled();
    expect(types.length).toBe(typeButtons);

    fireEvent.click(psychicButton);

    const disable = getByRole('button', { name: /Próximo Pokémon/i });
    expect(disable).toBeDisabled();
  });
});
