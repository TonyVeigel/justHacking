import * as constants from '../constants/constants';
import {addMessage} from '../actions/messageCenter';

export default function clientMiddleware({dispatch, getState}) {
        return (next) => (action) => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }
            const {promise, types, ...rest} = action;
            if (!promise) {
                return next(action);
            }
            const [REQUEST, SUCCESS, FAILURE] = types;
            next({...rest, type: REQUEST});
            return promise
                .then( response => {
                  if(response.status == 401){
                    next({type: constants.USER_AUTHENTICATION_FAILURE});
                    }
                    if (!response.ok) {
                      const error = new Error(response.statusText);
                      error.response = response;
                      throw error;
                    }
                    return response;
                  }
                )
                .then(response => response.json())
                .then(result => {
                  next({...rest, result, type: SUCCESS});
                })
                .catch(error => {
                    next(addMessage(Math.random(), error, 'danger'));
                    next({...rest, type: FAILURE});
                });
        };
}
