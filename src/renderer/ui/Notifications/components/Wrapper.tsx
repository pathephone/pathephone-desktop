import * as React from 'react';

import e2e from '~shared/data/e2e';
import styles from './styles';

interface IProps {
  children: React.ReactNode;
}

const Wrapper: React.StatelessComponent<IProps> = ({ children }) => (
  <div
    className={styles.wrapper}
    id={e2e.NOTIFICATIONS_CONTAINER_ID}
  >
    {children}
  </div>
);

export default Wrapper;
