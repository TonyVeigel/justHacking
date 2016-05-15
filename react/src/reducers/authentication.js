import {USER_AUTHENTICATION_REQUEST, USER_AUTHENTICATION_SUCCESS, USER_AUTHENTICATION_FAILURE} from '../constants/constants';

const initialState = {
  authenticated: false,
  token: null
};

export const authentication = (state=initialState, action) => {
  switch(action.type){
    case USER_AUTHENTICATION_REQUEST:
      return initialState;
    case USER_AUTHENTICATION_SUCCESS:
      return {authenticated:true, token: action.result.access_token};
    case USER_AUTHENTICATION_FAILURE:
      return {authenticated:false, token: null};
    default:
      return state;
    }
}
