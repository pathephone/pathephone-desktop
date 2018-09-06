import { connect } from 'react-redux';

import { notificationsEvents } from '~renderer/ui/Notifications/events';
import { notificationsSelectors } from '~renderer/ui/Notifications/selectors';
import { NotificationsContainer } from '~renderer/ui/Notifications/view/container';

const mapStateToProps = state => ({
  notifications: notificationsSelectors.getNotifications(state),
});

const mapDispatchToProps = {
  onNotificationExpired: notificationsEvents.notificationExpired,
  onToastClick: notificationsEvents.notificationCanceled,
};

export const Notifications = connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
