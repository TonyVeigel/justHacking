import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import HomeView from '../components/Home';

class Home extends Component {

  render(){
    return(
      <div>
        <HomeView />
      </div>
    )
  }

}

export default connect()(Home)
