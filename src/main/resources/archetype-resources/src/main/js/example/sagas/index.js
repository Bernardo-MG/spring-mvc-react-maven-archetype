import { takeLatest } from 'redux-saga/effects';
import * as types from 'players/actions/actionTypes';
import { requestCurrentPage, requestNextPage } from 'players/sagas/requests';
import { build } from 'players/sagas/creators';

export const entitySagas = [
   takeLatest(types.REQUEST_ENTITIES, requestCurrentPage),
   takeLatest(types.REQUEST_SUCCESS_ENTITIES, build),
   takeLatest(types.CHANGE_PAGE_NEXT_ENTITIES, requestNextPage)
];
