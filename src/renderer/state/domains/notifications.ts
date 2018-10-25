import { AnyAction, Reducer } from 'redux';

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

    case actions.systemNewRelaseDetected.toString():
      return notificationsSetters.addSuccessNotification(
        state, i18n.NEW_RELEASE_NOTIFICATION
      );
    
    case actions.systemShareCandidateSaveSucceed.toString():
      return notificationsSetters.addSuccessNotification(
        state, i18n.SHARE_FORM_SUBMIT_SUCCEED
      )
    
    case actions.systemShareCandidateSaveFailed.toString():
      return notificationsSetters.addErrorNotification(state, payload)
  
    case actions.systemShareCandidatesNotFound.toString():
      return notificationsSetters.addWarningNotification(
        state, i18n.NO_ALBUMS_FOUND
      )

    case actions.systemShareFilesProcessingFailed.toString():
        return notificationsSetters.addErrorNotification(state, payload)

    case actions.systemDiscoverSelectedActionFailed.toString():
        return notificationsSetters.addErrorNotification(state, payload)

    case actions.systemDiscoverAlbumsFetchFailed.toString():
        return notificationsSetters.addErrorNotification(state, payload)

    case actions.notificationExpired.toString():
    case actions.notificationCanceled.toString():
      return notificationsSetters.removeNotification(state, payload);
    default:
      return state;
  }
};
