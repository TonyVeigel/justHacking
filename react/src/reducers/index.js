import {combineReducers} from 'redux';
import * as constants from '../constants/constants';
import { reducer as formReducer } from 'redux-form'

import {authentication} from '../reducers/authentication';
import {messages} from '../reducers/messageCenter';

export default combineReducers({
  messages,
  authentication,
  form: formReducer
})
