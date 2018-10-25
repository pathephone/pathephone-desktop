import { connect, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import { Notifications } from '~renderer/ui/Notifications/view/Notifications';
import { PayloadCreator } from 'typesafe-actions/dist/types';
import { INotification } from '~renderer/state/domains/notifications/types';
import selectors from '~renderer/state/selectors';
import { notificationsEvents } from '~renderer/ui/Notifications';

// state

interface IStateProps {
  notifications: INotification[];
}
const mapStateToProps: MapStateToProps<IStateProps, {}, IRootState> = (
  state: IRootState
) : IStateProps => ({
  notifications: selectors.getNotifications(state)
});

// dispatch

interface IDispatchProps {
  onNotificationExpired: PayloadCreator<string, number>;
  onToastRemove: PayloadCreator<string, number>;
}
const mapDispatchToProps: IDispatchProps = {
  onNotificationExpired: notificationsEvents.notificationExpired,
  onToastRemove: notificationsEvents.notificationCanceled
};

export const NotificationsConnected: React.ComponentClass = connect<IStateProps, IDispatchProps>(
  mapStateToProps, mapDispatchToProps
)(Notifications);
