import * as React from 'react';

import { NotificationsToast } from '~renderer/ui/Notifications/components/NotificationsToast';
import { NotificationsWrapper } from '~renderer/ui/Notifications/components/NotificationsWrapper';
import { INotification } from '~renderer/ui/Notifications/types';

interface IProps {
  notifications: INotification[];
  onToastClick(params: number): void;
}

export const NotificationsContainer: React.StatelessComponent<IProps> = (
  { notifications, onToastClick } : IProps
) : React.ReactElement<IProps> => (
  <NotificationsWrapper>
    {
      notifications.map((data: INotification) => (
        <NotificationsToast {...data} onToastClick={onToastClick} key={data.id} />
      ))
    }
  </NotificationsWrapper>
);
