import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import MessageCenterView from '../components/MessageCenter';

class MessageCenter extends Component {

  render(){
    const {messages} = this.props;
    return (
      <MessageCenterView messages={messages}/>
    )
  }
}

const mapStateToProps = (state) => {
  const {messages} = state;
  return{
    messages
  };
}

export default connect(mapStateToProps)(MessageCenter)
