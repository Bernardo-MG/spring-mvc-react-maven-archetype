import { all } from 'redux-saga/effects';
import { searchSagas } from 'search/sagas';
import { entitySagas } from 'entities/sagas';

/**
 * Application redux sagas.
 * 
 * It is just a merge of all the sagas in the application.
 */
export default function* rootSaga() {
   yield all([...searchSagas, ...entitySagas]);
}
