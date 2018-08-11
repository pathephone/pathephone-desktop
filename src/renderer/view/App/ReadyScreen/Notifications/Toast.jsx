import React from 'react';
import propTypes from 'prop-types';

import {
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from '~data/constants';

class Toast extends React.Component {
  handleToastClick = () => {
    const { onToastClick, id } = this.props;
    onToastClick(id);
  }

  render() {
    const { text, type } = this.props;
    return (
      <p
        className={
          type === NOTIFICATION_TYPE_SUCCESS
            ? 'notificationToastSuccess'
            : type === NOTIFICATION_TYPE_WARNING
              ? 'notificationToastWarning'
              : type === NOTIFICATION_TYPE_ERROR
            && 'notificationToastError'
        }
        onClick={this.handleToastClick}
      >
        {text}
      </p>
    );
  }
}

Toast.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.number.isRequired,
  onToastClick: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};

export default Toast;
