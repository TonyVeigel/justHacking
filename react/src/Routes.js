import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import {browserHistory} from 'react-router';

import App from './containers/App';
import Login from './containers/Login';
import authentication from './hoc/Authentication';
import Home from './containers/Home';
import TicTacToe from './containers/TicTacToe';

export default class Routes extends Component {
  render() {
    return (
      <Router  history={browserHistory}>
        <Route path='tictactoe' component={TicTacToe} />
        <Route path='home' component={Home} />
        <Route path='login' component={Login} />
        <Route path='app' component={authentication(App)}>
        </Route>
      </Router>
    );
  }
}
