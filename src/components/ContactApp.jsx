import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, fetchContacts, setFilter } from './contactsSlice';
import { logout, login, register } from './authSlice';
import { nanoid } from 'nanoid';
import './ContactApp.css';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Home from './Home';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import PrivateRoute from './PrivateRoute';
import UserMenu from './UserMenu'; // Import komponentu UserMenu

function ContactApp() {
  const contacts = useSelector(state => state.contacts.contacts);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = (event, setterFunction) => {
    const { value } = event.target;
    setterFunction(value);
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleLogin = async () => {
    try {
      // Wywołaj funkcję logowania na serwerze i uzyskaj token lub dane użytkownika
      // Po poprawnym zalogowaniu ustaw stan autoryzacji w Redux na true
      await dispatch(login({ email, password })); // Przykładowe użycie z przekazaniem danych logowania
    } catch (error) {
      console.error('Błąd logowania:', error);
      // Obsłuż błędy logowania, np. wyświetl komunikat dla użytkownika
    }
  };

  const handleRegister = async () => {
    try {
      // Wywołaj funkcję rejestracji na serwerze i uzyskaj token lub dane użytkownika
      // Po poprawnej rejestracji ustaw stan autoryzacji w Redux na true
      await dispatch(register({ email, password })); // Przykładowe użycie z przekazaniem danych rejestracji
    } catch (error) {
      console.error('Błąd rejestracji:', error);
      // Obsłuż błędy rejestracji, np. wyświetl komunikat dla użytkownika
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingContact = contacts.find(
      (contact) =>
        contact.surname.toLowerCase() === surname.toLowerCase() &&
        contact.number === number
    );
    if (existingContact) {
      alert('Contact with the same surname and number already exists.');
    } else {
      const id = nanoid();
      const newContact = { id, surname, number };
      dispatch(addContact(newContact));
      setSurname('');
      setNumber('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div className="ContactApp">
        <h1>Phonebook</h1>
        {isAuthenticated && <UserMenu />} {/* Wyświetl UserMenu jeśli użytkownik jest zalogowany */}
        
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={() => <LoginForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} />} />
          <Route path="/register" render={() => <RegisterForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleRegister={handleRegister} />} />
          <PrivateRoute path="/contacts" isAuthenticated={isAuthenticated}>
            <div>
              <button onClick={handleLogout}>Logout</button>
              <h2>Add Contact</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-section">
                  <label htmlFor="surname">Name:</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Jan Kowalski"
                    required
                    value={surname}
                    onChange={(event) => handleChange(event, setSurname)}
                  />
                </div>
                <div className="form-section">
                  <label htmlFor="number">Phone Number:</label>
                  <input
                    type="text"
                    name="number"
                    placeholder="000-000-000"
                    required
                    value={number}
                    onChange={(event) => handleChange(event, setNumber)}
                  />
                </div>
                <button type="submit">Add Contact</button>
              </form>
              <h2>Contacts</h2>
              <input
                type="text"
                placeholder="Search by surname or number"
                value={filter}
                onChange={(event) => handleFilterChange(event)}
              />
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    {contact.surname}: {contact.number}{' '}
                    <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          </PrivateRoute>
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default ContactApp;
