import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './CSS/index.css';
import App from './JS/components/App';
import store from './JS/data/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
