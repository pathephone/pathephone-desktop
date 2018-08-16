import React from 'react';
import propTypes from 'prop-types';

import Toast from './Notifications/Toast';

import './Notifications.css';
import { ids } from '~data';

const Notifications = ({ notifications, onToastClick }) => (
  <div
    className="notificationsContainer"
    id={ids.NOTIFICATIONS_CONTAINER_ID}
  >
    {
      notifications.map(data => (
        <Toast {...data} onToastClick={onToastClick} key={data.id} />
      ))
    }
  </div>
);

Notifications.propTypes = {
  notifications: propTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  onToastClick: propTypes.func.isRequired,
};

export default Notifications;
