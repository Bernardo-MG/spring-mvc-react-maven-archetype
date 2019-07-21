import { put, takeLatest, call } from 'redux-saga/effects';
import { SEARCH_ENTITY, SEARCH_ENTITY_SUCCESS } from 'search/actions/types';
import { success, failure, setIds as setEntityIds } from 'search/actions/entities';
import api from 'api';
import { addEntities } from 'entities/actions';
import { normalize } from 'normalizr';
import { entity } from 'entities/schema';

export function* search(action) {
   if (action.payload) {
      let response;
      try {
         response = yield call(api.Entities.byTitle, action.payload);
         yield put(success(response));
      } catch (err) {
         yield put(failure(err));
      }
   } else {
      console.error('Missing payload');
   }
}

export function* saveEntities(action) {
   const normalized = normalize(action.payload.docs, [entity]);
   yield put(addEntities(normalized.entities.books));
   yield put(setEntityIds(normalized.result));
}

export const searchSagas = [
   takeLatest(SEARCH_ENTITY, search),
   takeLatest(SEARCH_ENTITY_SUCCESS, saveEntities)
];
