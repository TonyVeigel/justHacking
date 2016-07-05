import 'babel-polyfill';

require('bootstrap/less/bootstrap.less');
require('./index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';

import configureStore from './store/configureStore';

const appStartPoint = document.getElementById('appStartPoint');
const store = configureStore();

const app = (
  <Provider store={store}>
    <Routes/>
  </Provider>
);


ReactDOM.render(app, appStartPoint);
