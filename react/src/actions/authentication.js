
import {fetchCookie} from './utils';
import * as constants from '../constants/constants';

export function loginUser(data) {
  return {
    types: [constants.USER_AUTHENTICATION_REQUEST, constants.USER_AUTHENTICATION_SUCCESS, constants.USER_AUTHENTICATION_FAILURE],
    promise: fetchCookie("api/login", {
      method:'post',
      body:JSON.stringify({username:data.username, password:data.password})
    })
  };
}
