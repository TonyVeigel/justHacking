import {combineReducers} from 'redux';
import * as constants from '../constants/constants';
import { reducer as formReducer } from 'redux-form'

import {authentication} from '../reducers/authentication';
import {ticTacToe} from '../reducers/ticTacToe';

export default combineReducers({
  ticTacToe,
  authentication,
  form: formReducer
})
