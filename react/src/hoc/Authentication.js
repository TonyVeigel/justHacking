import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function requiresAuth(ComposedComponent) {
  class Authentication extends Component {

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { dispatch, token} = this.props;
      if(!token){
        this.context.router.push('/login')
      }
    }

    render() {
      return (
        <div className="authenticated">
          { this.props.token ? <ComposedComponent {...this.props} /> : null }
        </div>
      );
    }
  }

  Authentication.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  const mapStateToProps = (state) => {
    return {
      token: state.authentication.token
    };
  };

  return connect(mapStateToProps)(Authentication);
}
