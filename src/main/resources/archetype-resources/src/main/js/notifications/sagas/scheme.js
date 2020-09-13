import { put, takeLatest } from 'redux-saga/effects';

import * as types from 'api/actions/types';

import { notifySuccess } from 'notify/actions';

export function* notifySaved() {
   yield put(notifySuccess('saved_message'));
}

export function* notifyUpdated() {
   yield put(notifySuccess('updated_message'));
}

export function* notifyDeleted() {
   yield put(notifySuccess('deleted_message'));
}

export const schemeNotificationSagas = [
   takeLatest(types.SCHEME_SAVED, notifySaved),
   takeLatest(types.SCHEME_UPDATED, notifyUpdated),
   takeLatest(types.SCHEME_DELETED, notifyDeleted)
];
