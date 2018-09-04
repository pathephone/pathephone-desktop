import * as React from 'react';

import styles from './styles';

interface IProps {
  children: React.ReactNode;
}

const StartScreenWrapper: React.StatelessComponent<IProps> = ({ children }) => (
  <div className={styles.wrapper} >
    {children}
  </div>
);

export default StartScreenWrapper;
