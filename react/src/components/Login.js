import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/textField'
import RadioButton from 'material-ui/radioButton'
import RadioButtonGroup from 'material-ui/radioButton'
import Checkbox from 'material-ui/checkbox'
import SelectField from 'material-ui/selectField'
import MenuItem from 'material-ui/menuItem'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'username', 'password', 'email' ]
  requiredFields.forEach(field => {
    if(!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const Login = props => {
  const { handleSubmit, reset, submitting, createAccount, handleCreateAccountClick, loginError } = props
  return (
    <div className='container'>
      <div className='row'>
        {loginError &&
          <div>
            <h3 className='text-danger'>
              Incorrect Username and/or Password
            </h3>
            <h5 className='text-info'>
              Retrieve Password?
            </h5>
          </div>
        }
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="username"
              component={username =>
                <TextField
                  hintText = "Username"
                  floatingLabelText="Username"
                  errorText = {username.touched && username.error}
                  {...username}
                  />
              }/>
            </div>
            <div>
              <Field
                name="password"
                component={password =>
                  <TextField
                    hintText = "Password"
                    type="password"
                    floatingLabelText="Password"
                    errorText = {password.touched && password.error}
                    {...password}
                    />
                }/>
              </div>
              <div>
                {createAccount &&
                  <Field
                    name="email"
                    component={email =>
                      <TextField
                        hintText="Email"
                        floatingLabelText="Email"
                        errorText = {email.touched && email.error}
                        {...email}
                        />
                    }/>
                  }
                </div>
                <div className='row'>
                  <div className='col-xs-12'>
                    <button
                      className='btn btn-success'
                      type="submit"
                      disabled={submitting}>
                      {createAccount ? 'Create New Account' : 'Login'}
                    </button>
                  </div>
                </div>
                <br />
                {!createAccount &&
                  <div className='row'>
                    Not Registered? <button onClick={handleCreateAccountClick} className='btn btn-info' type="button" disabled={submitting}>Create Account</button>
                </div>
              }
            </form>
          </div>
        </div>
      )
    }

export default reduxForm({
  form: 'Login',
  validate
})(Login)
