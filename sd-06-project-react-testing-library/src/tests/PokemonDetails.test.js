import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('Testing structure PokemonDetails.js', () => {
  it('Testa se as informações detalhadas do Pokémon são mostradas na tela', () => {
    const pikachu = pokemons[0];

    const { getByText, history, queryByRole, container } = renderWithRouter(<App />);

    history.push(`/pokemons/${pikachu.id}`);

    const pikachuName = getByText(/Pikachu details/i);
    const link = queryByRole('link', { name: 'More details' });
    const h2 = container.querySelectorAll('h2');
    const textH2 = h2[1];
    const getAllP = document.querySelectorAll('p');
    const summaryP = getAllP[3];

    expect(pikachuName).toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
    expect(textH2).toBeInTheDocument();
    expect(textH2.innerHTML).toBe(' Summary ');
    expect(summaryP.innerHTML).toBe(`${pikachu.summary}`);
  });

  it('Testa se existe uma seção com os mapas contendo localizações do pokémon', () => {
    const { getByText, getAllByRole, history, container } = renderWithRouter(<App />);
    const pikachu = pokemons[0];

    history.push(`/pokemons/${pikachu.id}`);

    const h2 = container.querySelectorAll('h2');
    const selecH2 = h2[2];
    const images = getAllByRole('img');
    const img1 = images[1];
    const img2 = images[2];
    const two = 2;
    const location1 = getByText(/Kanto Viridian Forest/i);
    const location2 = getByText(/Kanto Power Plant/);

    expect(location1.innerHTML).toBe('Kanto Viridian Forest');
    expect(location2.innerHTML).toBe('Kanto Power Plant');
    expect(pikachu.foundAt.length).toBe(two);
    expect(selecH2.innerHTML).toBe(`Game Locations of ${pikachu.name}`);
    expect(img1).toBeInTheDocument();
    expect(img1.alt).toBe(`${pikachu.name} location`);
    expect(img2.alt).toBe(`${pikachu.name} location`);
    expect(img1.src).toBe('https://cdn.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(img2.src).toBe('https://cdn.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Testa se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    const { history, getAllByRole, getByRole } = renderWithRouter(<App />);

    const pikachu = pokemons[0];

    history.push(`/pokemons/${pikachu.id}`);

    const check = getByRole('checkbox', { name: 'Pokémon favoritado?' });
    expect(check.checked).toBe(false);

    fireEvent.click(check);

    const imgStar = getAllByRole('img');
    const star = imgStar[1];

    expect(check.checked).toBe(true);
    expect(star.alt).toBe(`${pikachu.name} is marked as favorite`);

    fireEvent.click(check);
    expect(check.checked).toBe(false);
    expect(star).not.toBeInTheDocument();
  });
});
