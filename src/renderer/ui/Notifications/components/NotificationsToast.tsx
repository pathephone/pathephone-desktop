import * as React from 'react';

import { notificationsStyles } from '~renderer/ui/Notifications';
import { INotificationType } from '~renderer/state/domains/notifications/types';

interface IProps {
  text: string;
  notificationType: INotificationType;
  id: number;
  onToastRemove(params: number): void;
}

class NotificationsToast extends React.Component<IProps> {

  private timeoutId: number | null = null;

  public handleToastClick = (): void => {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = null;
    const { onToastRemove, id } = this.props;
    onToastRemove(id);
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

  public componentDidMount () : void {
    this.timeoutId = window.setTimeout(
      () => {
        const { onToastRemove, id } = this.props;
        onToastRemove(id);
      },
      5000
    );
  }

  private getToastClassname = (notificationType: INotificationType) : string => {
    switch (notificationType) {
      case 'SUCCESS':
        return notificationsStyles.toastSuccess;
      case 'WARNING':
        return notificationsStyles.toastWarning;
      case 'ERROR':
        return notificationsStyles.toastError;
      default:
        throw new Error(`Unknown notification type: ${notificationType}.`);
    }
  }
}

export { NotificationsToast };
