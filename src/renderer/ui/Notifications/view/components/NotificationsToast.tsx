import * as React from 'react';

import { INotificationType } from '~renderer/ui/Notifications/types';
import { notificationsStyles } from '~renderer/ui/Notifications/view/styles';

interface IProps {
  text: string;
  type: INotificationType;
  onToastClick: (params: number) => void;
  id: number;
}

class NotificationsToast extends React.Component<IProps> {
  public handleToastClick = () => {
    const { onToastClick, id } = this.props;
    onToastClick(id);
  }

  public render() {
    const { text, type } = this.props;
    return (
      <button
        type="button"
        className={this.getToastClassname(type)}
        onClick={this.handleToastClick}
      >
        {text}
      </button>
    );
  }

  private getToastClassname = (type: INotificationType) => (
    type === 'OK'
      ? notificationsStyles.toastSuccess
      : type === 'WARNING'
        ? notificationsStyles.toastWarning
        : type === 'ERROR'
          && notificationsStyles.toastError
  )
}

export { NotificationsToast };
