import * as React from 'react';

import { NotificationsToast } from '~renderer/ui/Notifications/components/NotificationsToast';
import { NotificationsWrapper } from '~renderer/ui/Notifications/components/NotificationsWrapper';
import { INotification } from '~renderer/ui/Notifications/types';

interface IProps {
  notifications: INotification[];
  onToastRemove(params: number): void;
}

export const NotificationsContainer: React.StatelessComponent<IProps> = (
  { notifications, onToastRemove } : IProps
) : React.ReactElement<IProps> => (
  <NotificationsWrapper>
    {
      notifications.map((data: INotification) => (
        <NotificationsToast
          {...data}
          onToastRemove={onToastRemove}
          key={data.id}
        />
      ))
    }
  </NotificationsWrapper>
);
