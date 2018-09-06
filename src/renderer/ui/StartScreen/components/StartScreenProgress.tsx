import * as React from 'react';

import { startScreenStyles } from '~renderer/ui/StartScreen/styles';

interface IProps {
  progress: number;
}

const StartScreenProgress: React.StatelessComponent<IProps> = (
  { progress }: IProps
): React.ReactElement<IProps> => (
  <div className={startScreenStyles.progressTotal}>
    <div className={startScreenStyles.progressReady} style={{ width: `${progress}%` }} />
  </div>
);

export { StartScreenProgress };
