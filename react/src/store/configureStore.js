import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from '../middleware/middleware';
import combinedReducers from '../reducers';

let finalCreateStore;
if(__DEVELOPMENT__){
  const createLogger = require('redux-logger');
  const logger = createLogger();
  finalCreateStore = compose(
    applyMiddleware(thunkMiddleware, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);
}else{
  finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
}

export default function configureStore(initialState) {
  return finalCreateStore(combinedReducers, initialState);
}
