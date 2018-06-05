import React from 'react'
import propTypes from 'prop-types'

import Toast from './Notifications/Toast.jsx'

import './Notifications.css'

const Notifications = ({ notifications, onToastClick }) => (
  <div className='notificationsContainer'>
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
