import React from 'react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testing structure NotFound.js', () => {
  it('Testa se a página contem um heading h2 contendo Page Request not found', () => {
    const { container, getByRole, history } = renderWithRouter(<App />);

    history.push('/test');

    const text = getByRole('heading', {
      name: 'Page requested not found Crying emoji',
    });
    const tag = container.querySelector('h2');

    expect(text).toBeInTheDocument();
    expect(tag).toBeTruthy();
  });

  it('Testa se a página mostra uma imagem definida', () => {
    const { container, history } = renderWithRouter(<App />);

    history.push('/test');

    const img = container.querySelector('img');
    const imgPath = img.src;
    expect(imgPath).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
