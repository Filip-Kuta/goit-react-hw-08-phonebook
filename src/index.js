import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import store from 'components/store';
import './index.css';
import ContactApp from 'components/ContactApp';
import RegisterPage from 'components/RegisterPage'; // Importuj stronę rejestracji
import LoginPage from 'components/LoginPage'; // Importuj stronę logowania

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/contacts" element={<ContactApp />} />
  
  {/* Inne trasy */}
</Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
