// PhonebookApp.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactApp from './ContactApp';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ContactsPage from './ContactsPage';

function PhonebookApp() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/" component={ContactApp} />
      </Switch>
    </Router>
  );
}

export default PhonebookApp;
