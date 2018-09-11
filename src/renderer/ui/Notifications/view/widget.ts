import { connect, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import { notificationsEvents, notificationsSelectors } from '~renderer/ui/Notifications';
import { INotification } from '~renderer/ui/Notifications/types';
import { NotificationsContainer } from '~renderer/ui/Notifications/view/container';
import { IActionCreator } from '~renderer/utils/actions';

// state

interface IStateProps {
  notifications: INotification[];
}
const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
) : IStateProps => ({
  notifications: notificationsSelectors.getNotifications(state)
});

// dispatch

interface IDispatchProps {
  onNotificationExpired: IActionCreator<number>;
  onToastRemove: IActionCreator<number>;
}
const mapDispatchToProps: IDispatchProps = {
  onNotificationExpired: notificationsEvents.notificationExpired,
  onToastRemove: notificationsEvents.notificationCanceled
};

export const NotificationsWidget: React.ComponentClass = connect<IStateProps, IDispatchProps>(
  mapStateToProps, mapDispatchToProps
)(NotificationsContainer);
