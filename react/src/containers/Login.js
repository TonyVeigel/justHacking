import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authentication';
import LoginView from '../components/Login';

class Login extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data){
    const {dispatch} = this.props;
    dispatch(loginUser(data))
      .then( () =>
        this.context.router.push('/app')
      )
      .catch( () =>
        console.log('Login Error')
    )
  }

  render(){
    return(
      <div>
        <LoginView onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect()(Login)
