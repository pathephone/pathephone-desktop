import { systemAction, uiAction } from '~renderer/utils/actions';

export const notificationCanceled = uiAction('NOTIFICATION_CANCELED');

export const notificationExpired = systemAction('NOTIFICATION_EXPIRED');
