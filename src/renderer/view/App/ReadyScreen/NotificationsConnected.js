import { connect } from 'react-redux'

import { getNotifications } from '#selectors'

import { uiNotificationToastRemoved } from '#actions-ui'

import Notifications from './Notifications.jsx'

const mapStateToProps = state => ({
  notifications: getNotifications(state)
})

const mapDispatchToProps = {
  onToastClick: uiNotificationToastRemoved
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
