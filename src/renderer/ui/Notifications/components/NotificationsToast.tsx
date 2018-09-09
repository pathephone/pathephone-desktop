import * as React from 'react';

import { notificationsStyles } from '~renderer/ui/Notifications';
import { INotificationType } from '~renderer/ui/Notifications/types';

interface IProps {
  text: string;
  notificationType: INotificationType;
  id: number;
  onToastClick(params: number): void;
}

class NotificationsToast extends React.Component<IProps> {
  public handleToastClick = () : void => {
    const { onToastClick, id } = this.props;
    onToastClick(id);
  }

  public render() : React.ReactNode {
    const { text, notificationType } = this.props;

    return (
      <button
        type='button'
        className={this.getToastClassname(notificationType)}
        onClick={this.handleToastClick}
      >
        {text}
      </button>
    );
  }

  private getToastClassname = (actionType: INotificationType) : string => (
    actionType === 'OK'
      ? notificationsStyles.toastSuccess
      : actionType === 'WARNING'
        ? notificationsStyles.toastWarning
        : actionType === 'ERROR'
          && notificationsStyles.toastError
  )
}

export { NotificationsToast };
