import { connect, MapStateToProps } from 'react-redux';

import { IRootState } from '~renderer/state/rootState';
import { notificationsEvents, notificationsSelectors } from '~renderer/ui/Notifications';
import { INotification } from '~renderer/ui/Notifications/types';
import { Notifications } from '~renderer/ui/Notifications/view/Notifications';
import { PayloadCreator } from 'typesafe-actions/dist/types';

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
