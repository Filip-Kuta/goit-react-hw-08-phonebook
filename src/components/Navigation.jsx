// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Rejestracja</Link>
        </li>
        <li>
          <Link to="/login">Logowanie</Link>
        </li>
        <li>
          <Link to="/contacts">Kontakty</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
