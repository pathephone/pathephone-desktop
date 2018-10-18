import { AnyAction } from 'redux';
import { all, put, takeEvery } from 'redux-saga/effects';

import { actions } from '~renderer/state/actions';
import {
  NOTIFICATION_TYPE_ERROR,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING
} from '~shared/data/constants';
import isObject from '~shared/utils/isObject';

interface INotificationPayload {
  text: string;
  notificationType: 'ERROR' | 'WARNING' | 'SUCCESS';
  id: number;
}

let counter: number = 0;

function* handleAction({ payload }: AnyAction): Generator {
  if (payload && isObject(payload)) {
    const { errorMessage, warningMessage, successMessage } = payload;
    let nextPayload: INotificationPayload | void;
    if (errorMessage) {
      nextPayload = {
        text: errorMessage,
        notificationType: NOTIFICATION_TYPE_ERROR,
        id: counter += 1
      };
    }
    if (warningMessage) {
      nextPayload = {
        text: warningMessage,
        notificationType: NOTIFICATION_TYPE_WARNING,
        id: counter += 1
      };
    }
    if (successMessage) {
      nextPayload = {
        text: successMessage,
        notificationType: NOTIFICATION_TYPE_SUCCESS,
        id: counter += 1
      };
    }
    if (nextPayload) {
      yield put(actions.systemNotificationRecieved(nextPayload));
    }
  }
}

export function* startNotificationsService(): Generator {
  yield all([
    takeEvery('*', handleAction)
  ]);
}
