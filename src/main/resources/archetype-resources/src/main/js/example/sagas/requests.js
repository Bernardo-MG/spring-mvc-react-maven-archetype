import { put, call, select } from 'redux-saga/effects';
import * as types from 'players/actions/actionTypes';
import { fetcherPlayer as fetcher } from 'players/requests/fetchers';
import { selectCanLoadPlayer as canLoadSelector } from 'players/selectors/request';
import { selectCurrentPlayerPage as currentPageSelector } from 'players/selectors/page';
import { requestSuccess, requestFailure } from 'players/actions/players';

export function fetch(params) {
   return fetcher.fetch(params);
}

export function* request(action, pageStep) {
   const canLoad = yield select(canLoadSelector);
   if (canLoad) {
      yield put({ type: types.FETCHING_ENTITIES });
      const currentPage = yield select(currentPageSelector);
      const page = currentPage + pageStep;
      const params = { ...action.params, page };
      let response;
      try {
         response = yield call(fetch, params);
         if (response) {
            yield put(requestSuccess(response.payload, response.pagination));
         } else {
            yield put(requestFailure('Undefined response'));
         }
      } catch (err) {
         yield put(requestFailure(err));
      }
   }
}

export function* requestCurrentPage(action) {
   yield call(request, action, 0);
}

export function* requestNextPage(action) {
   yield call(request, action, 1);
}
