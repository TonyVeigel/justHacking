import React,{Component, PropTypes} from 'react';
import HomeView from '../components/Home';
import {connect} from 'react-redux';

class Home extends Component {

  render(){
    return(
      <HomeView/>
    )
  }

}


function mapStateToProps(state){

  return {

  };
}

export default connect(mapStateToProps)(Home);
