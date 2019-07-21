import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import { DevMonitor } from 'development';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware(sagaMonitor);

/**
 * Development application middleware.
 * 
 * It will include a logger.
 */
const middleware = [
   sagaMiddleware,
   // Redux logger is included
   createLogger()
];

/**
 * Development enhacers.
 * 
 * It will add the dev tools to the middleware.
 */
const enhancer = compose(
   applyMiddleware(...middleware),
   // Dev tools are included
   DevMonitor.instrument()
);

const configureStore = () => createStore(rootReducer, enhancer);

export default () => {
   const store = configureStore();

   sagaMiddleware.run(rootSaga);

   return store;
};
