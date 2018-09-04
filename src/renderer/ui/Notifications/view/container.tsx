import * as React from 'react';

import Toast from '../components/Toast';
import Wrapper from '../components/Wrapper';
import { INotification } from '../types';

interface IProps {
  notifications: INotification[];
  onToastClick: () => void;
}

const NotificationsContainer: React.StatelessComponent<IProps> = (
  { notifications, onToastClick },
) => (
  <Wrapper>
    {
      notifications.map((data: INotification) => (
        <Toast {...data} onToastClick={onToastClick} key={data.id} />
      ))
    }
  </Wrapper>
);

export default NotificationsContainer;
