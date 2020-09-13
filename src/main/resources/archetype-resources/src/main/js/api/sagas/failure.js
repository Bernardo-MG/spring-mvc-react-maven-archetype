import { put, takeLatest } from 'redux-saga/effects';

import * as types from 'api/actions/types';

import { notifyError } from 'notify/actions';

function getMessage(source) {
   let message = 'Request failure';

   if (source) {
      if (typeof source === 'string') {
         message = source;
      } else if (source.message) {
         message = source.message;
      }
   }

   return message;
}

export function* notifyFailure(action) {
   if (Array.isArray(action.payload.content)) {
      for (let index = 0; index < action.payload.content.length; index += 1) {
         const message = getMessage(action.payload.content[index]);

         yield put(notifyError(message));
      }
   } else {
      const message = getMessage(action.payload.message);

      yield put(notifyError(message));
   }
}

export const requestFailureSagas = [
   takeLatest(types.REQUEST_FAILURE, notifyFailure)
];
