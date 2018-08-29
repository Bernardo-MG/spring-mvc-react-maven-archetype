import { entitySagas } from 'example/sagas';

/**
 * Application redux sagas.
 * 
 * It is just a merge of all the sagas in the application.
 */
export default function* rootSaga() {
   yield [
      all([...entitySagas])
   ];
}
