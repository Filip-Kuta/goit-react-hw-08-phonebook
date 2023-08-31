// src/components/Contacts.js
import React, { useState } from 'react';

const Contacts = ({ user }) => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  const handleAddContact = () => {
    // Dodawanie nowego kontaktu do stanu komponentu lub wysyłanie na serwer
    setContacts([...contacts, newContact]);
    setNewContact({
      name: '',
      phone: '',
    });
  };

  return (
    <div>
      <h2>Książka Telefoniczna</h2>
      {user && <p>Zalogowany jako: {user}</p>}
      <h3>Dodaj Kontakt</h3>
      <form>
        <label>
          Imię:
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefon:
          <input
            type="text"
            name="phone"
            value={newContact.phone}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleAddContact}>
          Dodaj
        </button>
      </form>
      <h3>Lista Kontaktów</h3>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>{contact.name}</strong>: {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
