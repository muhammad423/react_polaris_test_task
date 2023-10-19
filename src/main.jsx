import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import App from './App.jsx'
import { store } from './redux/formStore.js';
import { Provider } from 'react-redux';
import '@shopify/polaris/build/esm/styles.css';
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AppProvider i18n={enTranslations}>
    <App />
  </AppProvider>,
  </Provider>
)
