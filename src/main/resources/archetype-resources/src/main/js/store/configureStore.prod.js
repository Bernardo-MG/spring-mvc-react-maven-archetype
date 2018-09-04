import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
   sagaMiddleware
];

const enhancer = applyMiddleware(...middleware);

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
