import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { 
  forbiddenWordsMiddleware, 
  processValueKey, 
  processEqualKey,
  processOperatorKey } from './middleware';
import createSageMiddleware from 'redux-saga';
import apiSaga from '../redux-sagas/api-saga';

const initSagaMiddleware = createSageMiddleware();

// Enables redux dev tools on middleware
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(
    forbiddenWordsMiddleware, 
    processValueKey, 
    processEqualKey,
    processOperatorKey,
    initSagaMiddleware))
);

initSagaMiddleware.run(apiSaga);

export default store;