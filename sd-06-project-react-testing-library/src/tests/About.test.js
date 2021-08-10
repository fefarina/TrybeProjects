import React from 'react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testing structure About.js', () => {
  it('Testa se a página contem as informações sobre a Pokedex', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/about');

    const phrase = getByText(/About Pokédex/);
    expect(phrase).toBeInTheDocument();
  });

  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/about');

    const phrase = getByText(/About Pokédex/);
    expect(phrase).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const { container, history } = renderWithRouter(<App />);

    history.push('/about');

    const paragrafos = container.querySelectorAll('p');
    const quantity = 2;
    expect(paragrafos.length).toBe(quantity);
  });

  it('Testa se a página contém uma imagem de uma Pokédex:', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    history.push('/about');

    const img = getByRole('img');
    const imgSrc = img.src;
    const path = 'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imgSrc).toBe(path);
  });
});
