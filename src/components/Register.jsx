import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wysłanie danych rejestracji do serwera lub przetworzenie lokalnie
    console.log('Zarejestrowano:', formData);
    // Zaktualizuj stan, aby wyświetlić komunikat o sukcesie
    setIsRegistered(true);
  };

  if (isRegistered) {
    // Jeśli użytkownik jest zarejestrowany, przekieruj go do komunikatu
    return (
      <div>
        <p>Rejestracja zakończona pomyślnie!</p>
        <Link to="/login">Przejdź do logowania</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Rejestracja</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nazwa użytkownika:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Hasło:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default Register;
