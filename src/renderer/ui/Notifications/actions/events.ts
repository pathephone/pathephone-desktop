import { createStandardAction } from 'typesafe-actions';

export const notificationCanceled = createStandardAction(
  'NOTIFICATION_CANCELED'
)<number>();

export const notificationExpired = createStandardAction(
  'NOTIFICATION_EXPIRED'
)<number>();
