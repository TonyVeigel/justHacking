import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router'
import Home from './components/Home';

export default class Routes extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}  history={browserHistory}>
        <Route path='/starter/home' component={Home}/>
      </Router>
    );
  }
}
