import {combineReducers} from 'redux';
import * as constants from '../constants/constants';
import { reducer as formReducer } from 'redux-form'

import {authentication} from '../reducers/authentication';

export default combineReducers({
  authentication,
  form: formReducer
})
