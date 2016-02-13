import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

export default class Routes extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}  history={history}>

      </Router>
    );
  }
}
