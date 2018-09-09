import * as React from 'react';

import { notificationsStyles } from '~renderer/ui/Notifications';
import e2e from '~shared/data/e2e';

interface IProps {
  children: React.ReactNode;
}

const NotificationsWrapper: React.StatelessComponent<IProps> = (
  props: IProps
) : React.ReactElement<IProps> => (
  <div
    className={notificationsStyles.wrapper}
    id={e2e.NOTIFICATIONS_CONTAINER_ID}
  >
    {props.children}
  </div>
);

export { NotificationsWrapper };
