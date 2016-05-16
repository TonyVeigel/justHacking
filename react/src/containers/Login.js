import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authentication';
import LoginView from '../components/Login';

class Login extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateAccountClick = this.handleCreateAccountClick.bind(this);
    this.state = {createAccount:false, loginError:false};
  }

  handleSubmit(data){
    const {dispatch} = this.props;
    dispatch(loginUser(data))
      .then( () =>
        this.context.router.push('/app')
      )
      .catch( () => {
          console.log('Login Error')
          this.setState({loginError:true});
        }
    )
  }

  handleCreateAccountClick(){
    this.setState({createAccount:true});
  }

  render(){
    return(
      <div>
        <LoginView loginError={this.state.loginError} handleCreateAccountClick={this.handleCreateAccountClick} createAccount={this.state.createAccount} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect()(Login)
