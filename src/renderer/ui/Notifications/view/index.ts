import { connect } from 'react-redux';

import events from '../events';
import selectors from '../selectors';
import container from './container';

const mapStateToProps = state => ({
  notifications: selectors.getNotifications(state),
});

const mapDispatchToProps = {
  onToastClick: events.notificationCanceled,
  onNotificationExpired: events.notificationExpired,
};

export default connect(mapStateToProps, mapDispatchToProps)(container);
