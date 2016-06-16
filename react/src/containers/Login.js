import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authentication';
import LoginView from '../components/Login';
import MessageCenter from '../containers/MessageCenter';

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
  }

  componentWillReceiveProps(nextProps){
    const {authentication} = nextProps;
    if(authentication.authenticated){
      this.context.router.push('/app')
    }
  }

  handleCreateAccountClick(){
    this.setState({createAccount:true});
  }

  render(){
    return(
      <div>
        <MessageCenter />
        <LoginView
          loginError={this.state.loginError}
          handleCreateAccountClick={this.handleCreateAccountClick}
          createAccount={this.state.createAccount}
          onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){

  const {authentication} = state;

  return {
    authentication
  }

}

export default connect(mapStateToProps)(Login)
