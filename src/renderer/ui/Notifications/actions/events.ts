import { IActionCreator, systemAction, uiAction } from '~renderer/utils/actions';

export const notificationCanceled: IActionCreator<number> = uiAction(
  'NOTIFICATION_CANCELED'
);

export const notificationExpired: IActionCreator<number> = systemAction(
  'NOTIFICATION_EXPIRED'
);
