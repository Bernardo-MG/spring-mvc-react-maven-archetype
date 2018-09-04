import { put } from 'redux-saga/effects';
import * as types from 'example/actions/actionTypes';

export function* build(action) {
   if (action.payload) {
      const entities = action.payload.entities;

      yield put({ type: types.CREATE_ENTITIES, payload: entities.entities });
   } else {
      console.error('Missing payload');
   }
}
