import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './CSS/index.css';
import App from './JS/components/App';
import store from './JS/data/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
