import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'components/store';
import './index.css';
import ContactApp from 'components/ContactApp';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import {createRoot} from "react-dom/client"
import { App } from 'components/App';

// ReactDOM.render(
//   <Provider store={store}>
//     <ContactApp />
//   </Provider>,
//   document.getElementById('root')
// );


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>
)