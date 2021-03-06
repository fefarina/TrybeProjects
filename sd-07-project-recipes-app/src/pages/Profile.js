import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HeaderNoSearch from '../components/HeaderNoSearch';
// import * as localStorageFunc from '../services/localStorageFunctions';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';

function Profile() {
  const { login } = useContext(RecipesContext);
  return (
    <div>
      <HeaderNoSearch title="Perfil" />
      <div>
        <section
          type="email"
          id="email"
          data-testid="profile-email"
        >
          <strong>User:</strong>
          {login.email}
        </section>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
          >
            Sair
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
