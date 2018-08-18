import { delay } from 'redux-saga';
import { takeEvery, all, put } from 'redux-saga/effects';

import actions from '#actions';
import {
  NOTIFICATION_TYPE_ERROR,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_SUCCESS,
} from '~shared/data/constants';

import isObject from '~shared/utils/isObject';
import { IS_TESTING } from '~shared/config';

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
      yield put(actions.systemNotificationRecieved(nextPayload));
      if (!IS_TESTING) {
        yield delay(3000);
        yield put(actions.systemNotificationExpired(counter));
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
