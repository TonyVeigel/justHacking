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
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="Username" component={username =>
          <TextField hintText = "Username"
            floatingLabelText="Username"
            errorText = {username.touched && username.error}
            {...username}
          />
        }/>
      </div>
      <div>
        <Field name="Password" component={password =>
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
        <Field name="email" component={email =>
              <TextField
                hintText="Email"
                floatingLabelText="Email"
                errorText = {email.touched && email.error}
                {...email}
              />
            }/>
      </div>
      <div>
        <button className='btn btn-success' type="submit" disabled={pristine || submitting}>Submit</button>
        <button className='btn btn-danger' type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
    </div>
  )
}

export default reduxForm({
  form: 'Login',
  validate
})(Login)
