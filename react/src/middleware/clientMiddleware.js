
import * as constants from '../constants/constants';

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
                      next({type: constants.USER_AUTHORIZATION_FAILURE});
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
                  next({...rest, result, type: SUCCESS})
                  return result;
                })
                .catch(function(error) {
                    next({...rest, type: FAILURE})
                    const response = error.response;
                    // if (response === undefined) {
                    //   next(messageCenterAddMessage(Math.random(), "We are experiencing technical problems at the moment. Please try later or contact support.", "danger"));
                    // } else {
                    //     response.json()
                    //       .then(function(json) {
                    //         next(messageCenterAddMessage(Math.random(), json.error, "danger"));
                    //       });
                    // }
                });
        };
}
