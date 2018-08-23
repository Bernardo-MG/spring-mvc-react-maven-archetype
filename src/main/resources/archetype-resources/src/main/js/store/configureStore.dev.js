import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import DevTools from 'development/components/DevTools';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

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
   DevTools.instrument()
);

const configureStore = (initialState) => createStore(
   rootReducer,
   initialState,
   enhancer
);

export default () => {
   const store = configureStore();

   sagaMiddleware.run(rootSaga);

   return store;
};
