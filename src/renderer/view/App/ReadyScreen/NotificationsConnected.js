import { connect } from 'react-redux';

import { getNotifications } from '#selectors';

import actions from '#actions';

import Notifications from './Notifications';

const mapStateToProps = state => ({
  notifications: getNotifications(state),
});

const mapDispatchToProps = {
  onToastClick: actions.uiNotificationToastRemoved,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
