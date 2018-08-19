import { connect } from 'react-redux';

import selectors from '#selectors';
import actions from '#actions';

import Notifications from './Notifications';

const mapStateToProps = state => ({
  notifications: selectors.getNotifications(state),
});

const mapDispatchToProps = {
  onToastClick: actions.uiNotificationToastRemoved,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
