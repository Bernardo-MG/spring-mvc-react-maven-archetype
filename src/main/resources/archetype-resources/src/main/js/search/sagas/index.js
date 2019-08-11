import { put, takeLatest, call, select } from 'redux-saga/effects';
import { SEARCH_ENTITY, SEARCH_ENTITY_SUCCESS } from 'search/actions/types';
import { success, failure, setIds as setEntityIds, setCurrentPage, setTotalPages, setTotalElements, setPerPage } from 'search/actions/entities';
import api from 'api';
import { selectEntityPage, selectEntityPerPage } from 'search/selectors';
import { addEntities } from 'entities/actions';
import { normalize } from 'normalizr';
import { entity } from 'entities/schema';

export function* search(action) {
   let response;
   const query = action.payload;
   const page = yield select(selectEntityPage);
   const perPage = yield select(selectEntityPerPage);
   try {
      response = yield call(api.Entities.byTitle, query, page, perPage);
      yield put(success(response));
   } catch (err) {
      yield put(failure(err));
   }
}

export function* saveEntities(action) {
   const normalized = normalize(action.payload.content, [entity]);
   yield put(addEntities(normalized.entities.entities));
   yield put(setEntityIds(normalized.result));
}

export function* setEntityPagination(action) {
   yield put(setCurrentPage(action.payload.number));
   yield put(setTotalPages(action.payload.totalPages));
   yield put(setTotalElements(action.payload.totalElements));
   yield put(setPerPage(action.payload.size));
}

export const searchSagas = [
   takeLatest(SEARCH_ENTITY, search),
   takeLatest(SEARCH_ENTITY_SUCCESS, saveEntities),
   takeLatest(SEARCH_ENTITY_SUCCESS, setEntityPagination)
];
