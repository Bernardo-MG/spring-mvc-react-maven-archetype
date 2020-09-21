import { put, takeLatest, call } from 'redux-saga/effects';

import { requestFailure } from 'api/actions';

const request = (type, operation) => {

   function* gen(action) {
      let response;
      try {
         response = yield call(operation, action.payload);
         if ((response.status) && (response.status === 'success')) {
            yield put({ type, payload: response.content });
         } else {
            yield put(requestFailure(response));
         }
      } catch (err) {
         yield put(requestFailure(err));
      }
   }

   return gen;
};

const create = (code, api) => request(`${code}_SAVED`, api.create);

const del = (code, api) => request(`${code}_DELETED`, api.delete);

const read = (code, api) => request(`${code}_RECEIVED`, api.read);

const update = (code, api) => request(`${code}_UPDATED`, api.update);

const crud = (code, api) => {
   return [
      takeLatest(`CREATE_${code}`, create(code, api)),
      takeLatest(`DELETE_${code}`, del(code, api)),
      takeLatest(`READ_${code}`, read(code, api)),
      takeLatest(`UPDATE_${code}`, update(code, api))
   ];
};

export {
   create,
   del,
   read,
   update,
   crud
};
