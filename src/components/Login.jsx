// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wysłanie danych logowania do serwera lub przetworzenie lokalnie
    console.log('Zalogowano:', formData);
    // Przekaż informację o zalogowanym użytkowniku do nadrzędnego komponentu
    onLogin(formData.email);
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required // Pole jest wymagane
          />
        </label>
        <label>
          Hasło:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required // Pole jest wymagane
          />
        </label>
        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
};

export default Login;
