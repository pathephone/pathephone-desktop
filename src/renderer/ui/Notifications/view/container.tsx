import * as React from 'react';

import { INotification } from '~renderer/ui/Notifications/types';
import { NotificationsWrapper } from '~renderer/ui/Notifications/view/components/NotificationsWrapper';
import { NotificationsToast } from '~renderer/ui/Notifications/view/components/NotificationsToast';

interface IProps {
  notifications: INotification[];
  onToastClick(): void;
}

export const NotificationsContainer: React.StatelessComponent<IProps> = (
  { notifications, onToastClick }
) => (
  <NotificationsWrapper>
    {
      notifications.map((data: INotification) => (
        <NotificationsToast {...data} onToastClick={onToastClick} key={data.id} />
      ))
    }
  </NotificationsWrapper>
);
