import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

describe('Testing structure App.js', () => {
  it('shows the Pokédex when the route is `/`', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/');
    const phrase = getByText(/Encountered pokémons/i);

    expect(phrase).toBeInTheDocument();
  });

  it('Testa se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    const homeLink = getByRole('link', { name: /Home/i });
    const aboutLink = getByRole('link', { name: /about/i });
    const favoriteLink = getByRole('link', { name: /Favorite Pokémons/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();

    history.push('/about');
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();

    history.push('/favorites');
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });

  it('Testa se a aplicação é redirecionada para URL / ao clicar no link Home.', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    const homeLink = getByRole('link', { name: /Home/i });
    fireEvent.click(homeLink);

    const homePath = history.location.pathname;
    expect(homePath).toBe('/');
  });

  it('Testa se a aplicação é redirecionada /about, ao clicar no link About.', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    const aboutLink = getByRole('link', { name: /About/i });
    fireEvent.click(aboutLink);

    const aboutPath = history.location.pathname;
    expect(aboutPath).toBe('/about');
  });

  it('Testa se a aplicação vai para /favorites, ao clicar em Favorite Pokémons.', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    const favoriteLink = getByRole('link', { name: /Favorite Pokémons/i });
    fireEvent.click(favoriteLink);

    const favoritePath = history.location.pathname;
    expect(favoritePath).toBe('/favorites');
  });

  it('Testa se a aplicação vai para Not Found ao digitar URL desconhecida.', () => {
    const { history, getByText } = renderWithRouter(<App />);

    history.push('/notFound');
    const notFound = getByText('Page requested not found');
    expect(notFound).toBeInTheDocument();
  });
});
