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

  private getToastClassname = (actionType: INotificationType) : string => {
    switch (actionType) {
      case 'OK':
        return notificationsStyles.toastSuccess;
      case 'WARNING':
        return notificationsStyles.toastWarning;
      case 'ERROR':
        return notificationsStyles.toastError;
      default:
        throw new Error('Unknown action type.');
    }
  }
}

export { NotificationsToast };
