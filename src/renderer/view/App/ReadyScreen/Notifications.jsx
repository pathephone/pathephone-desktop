import React from 'react'
import propTypes from 'prop-types'

import Toast from './Notifications/Toast.jsx'

import './Notifications.css'
import { E2E_NOTIFICATIONS_CONTAINER_ID } from '~data/e2eConstants'

const Notifications = ({ notifications, onToastClick }) => (
  <div
    className='notificationsContainer'
    id={E2E_NOTIFICATIONS_CONTAINER_ID}
  >
    {
      notifications.map(data => (
        <Toast {...data} onToastClick={onToastClick} key={data.id} />
      ))
    }
  </div>
)

Notifications.propTypes = {
  notifications: propTypes.array.isRequired,
  onToastClick: propTypes.func.isRequired
}

export default Notifications
