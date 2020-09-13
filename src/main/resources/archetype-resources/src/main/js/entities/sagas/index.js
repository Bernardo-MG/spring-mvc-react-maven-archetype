import { put, takeLatest, call } from 'redux-saga/effects';
import { CREATE_ENTITY } from 'entities/actions/types';
import { createSuccess as success, createFailure as failure } from 'entities/actions';
import { Entities } from 'api/requests';

export function* create(action) {
   let response;
   try {
      response = yield call(Entities.create, action.payload);
      yield put(success(response));
   } catch (err) {
      yield put(failure(err));
   }
}

export const entitySagas = [
   takeLatest(CREATE_ENTITY, create)
];
