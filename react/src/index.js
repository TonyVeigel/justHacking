import 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';

require('bootstrap/less/bootstrap.less');
require('./index.css');

import configureStore from './store/configureStore';

injectTapEventPlugin();

const appStartPoint = document.getElementById('appStartPoint');
const store = configureStore();

const app = (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </MuiThemeProvider>
);


ReactDOM.render(app, appStartPoint);
