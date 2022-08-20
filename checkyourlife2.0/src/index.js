// eslint-disable-next-line no-unused-vars
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SettingsContextProvider from './Components/SettingsContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
