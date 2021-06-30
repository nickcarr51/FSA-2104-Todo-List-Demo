import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const app = document.querySelector('#app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
