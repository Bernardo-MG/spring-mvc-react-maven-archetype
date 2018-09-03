import { put, call, select } from 'redux-saga/effects';
import * as types from 'example/actions/actionTypes';
import { fetcherPlayer as fetcher } from 'example/requests/fetchers';
import { selectCanLoadEntity as canLoadSelector } from 'example/selectors/request';
import { selectCurrentEntityPage as currentPageSelector } from 'example/selectors/page';
import { requestSuccess, requestFailure } from 'example/actions';

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
