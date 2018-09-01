import { takeLatest } from 'redux-saga/effects';
import * as types from 'example/actions/actionTypes';
import { requestCurrentPage, requestNextPage } from 'example/sagas/requests';
import { build } from 'example/sagas/creators';

export const entitySagas = [
   takeLatest(types.REQUEST_ENTITIES, requestCurrentPage),
   takeLatest(types.REQUEST_SUCCESS_ENTITIES, build),
   takeLatest(types.CHANGE_PAGE_NEXT_ENTITIES, requestNextPage)
];
