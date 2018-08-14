import { delay } from 'redux-saga';
import { takeEvery, all, put } from 'redux-saga/effects';

import { systemNotificationRecieved, systemNotificationExpired } from '~actions/system';
import {
  NOTIFICATION_TYPE_ERROR,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_SUCCESS,
} from '~data/constants';

import isObject from '~utils/isObject';
import { IS_TESTING } from '#config';

let counter = 0;

function* handleAction({ payload }) {
  if (payload && isObject(payload)) {
    const { errorMessage, warningMessage, successMessage } = payload;
    let nextPayload;
    if (errorMessage) {
      nextPayload = {
        text: errorMessage,
        type: NOTIFICATION_TYPE_ERROR,
      };
    }
    if (warningMessage) {
      nextPayload = {
        text: warningMessage,
        type: NOTIFICATION_TYPE_WARNING,
      };
    }
    if (successMessage) {
      nextPayload = {
        text: successMessage,
        type: NOTIFICATION_TYPE_SUCCESS,
      };
    }
    if (nextPayload) {
      counter += 1;
      nextPayload.id = counter;
      yield put(systemNotificationRecieved(nextPayload));
      if (!IS_TESTING) {
        yield delay(3000);
        yield put(systemNotificationExpired(counter));
      }
    }
  }
}

function* startNotificationsService() {
  yield all([
    takeEvery('*', handleAction),
  ]);
}

export default startNotificationsService;
