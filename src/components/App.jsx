import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Contacts from './Contacts';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    // Tutaj można dodać logikę autoryzacji i ustawienie użytkownika w stanie
    setUser(email);
  };

  const handleLogout = () => {
    // Tutaj można dodać logikę wylogowania użytkownika
    setUser(null);
  };

  return (
    <Router>
      <div>
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

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/contacts"
            element={<Contacts user={user} onLogout={handleLogout} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
