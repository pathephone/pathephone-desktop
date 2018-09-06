import * as React from 'react';

import { notificationsStyles } from '~renderer/ui/Notifications/view/styles';
import e2e from '~shared/data/e2e';

interface IProps {
  children: React.ReactNode;
}

const NotificationsWrapper: React.StatelessComponent<IProps> = ({ children }) => (
  <div
    className={notificationsStyles.wrapper}
    id={e2e.NOTIFICATIONS_CONTAINER_ID}
  >
    {children}
  </div>
);

export { NotificationsWrapper };
