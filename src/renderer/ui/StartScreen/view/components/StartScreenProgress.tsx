import * as React from 'react';

import styles from './styles';

interface IProps {
  progress: number;
}

const StartScreenProgress: React.StatelessComponent<IProps> = ({ progress }) => (
  <div className={styles.progressTotal}>
    <div className={styles.progressReady} style={{ width: `${progress}%` }} />
  </div>
);

export default StartScreenProgress;
