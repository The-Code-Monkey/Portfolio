import React from 'react';
import 'react-app-polyfill/ie11';
import { render } from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';

import './index.scss';
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);
