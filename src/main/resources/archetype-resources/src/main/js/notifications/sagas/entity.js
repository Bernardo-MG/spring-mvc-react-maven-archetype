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

export const entityNotificationSagas = [
   takeLatest(types.ENTITY_SAVED, notifySaved),
   takeLatest(types.ENTITY_UPDATED, notifyUpdated),
   takeLatest(types.ENTITY_DELETED, notifyDeleted)
];
