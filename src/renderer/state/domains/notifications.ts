import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import { actions } from '~renderer/state/actions';
import { INotificationsState } from '~renderer/state/domains/notifications/types';
import * as notificationsSetters from '~renderer/state/domains/notifications/setters';
import i18n from '~shared/data/i18n';

const initialNotificationsState: INotificationsState = [];

export const notificationsReducer: Reducer<INotificationsState> = (
  state: INotificationsState = initialNotificationsState,
  action: AnyAction
) : INotificationsState => {
  const { type, payload } = action;
  switch (type) {

    case getType(actions.systemNewRelaseDetected):
      return notificationsSetters.addSuccessNotification(
        state, i18n.NEW_RELEASE_NOTIFICATION
      );
    
    case getType(actions.systemShareCandidateSaveSucceed):
      return notificationsSetters.addSuccessNotification(
        state, i18n.SHARE_FORM_SUBMIT_SUCCEED
      )
    
    case getType(actions.systemShareCandidateSaveFailed):
      return notificationsSetters.addErrorNotification(state, payload)
  
    case getType(actions.systemShareCandidatesNotFound):
      return notificationsSetters.addWarningNotification(
        state, i18n.NO_ALBUMS_FOUND
      )

    case getType(actions.systemShareFilesProcessingFailed):
        return notificationsSetters.addErrorNotification(state, payload)

    case getType(actions.systemDiscoverSelectedActionFailed):
        return notificationsSetters.addErrorNotification(state, payload)

    case getType(actions.systemDiscoverAlbumsFetchFailed):
        return notificationsSetters.addErrorNotification(state, payload)

    case getType(actions.notificationExpired):
    case getType(actions.notificationCanceled):
      return notificationsSetters.removeNotification(state, payload);
    default:
      return state;
  }
};
