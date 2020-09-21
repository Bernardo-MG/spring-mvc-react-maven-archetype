import { put, takeLatest, call } from 'redux-saga/effects';

import { requestFailure } from 'api/actions';

const request = (operation) => {

   function* gen(action) {
      try {
         yield call(operation, action.payload);
      } catch (err) {
         yield put(requestFailure(err));
      }
   }

   return gen;
};

const read = (api) => request(api.report);

const report = (code, api) => {
   return [
      takeLatest(`GENERATE_${code}_REPORT`, request(api.report))
   ];
};

export {
   read,
   report
};
