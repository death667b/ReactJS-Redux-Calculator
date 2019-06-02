import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { 
  processValueKey, 
  processEqualKey,
  processOperatorKey } from './middleware';

// Enables redux dev tools on middleware
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(
    processValueKey, 
    processEqualKey,
    processOperatorKey))
);

export default store;