import * as React from 'react';

import ErrorMessage from '~components/ErrorMessage';
import StartScreenContainer from './dumb/StartScreenContainer';
import StartScreenProgress from './dumb/StartScreenProgress';

interface IProps {
  errorMessage?: string;
  infoMessage?: string;
  progress: number;
}

const StartScreenView: React.StatelessComponent<IProps> = ({
  errorMessage, infoMessage, progress,
}) => (
  <StartScreenContainer>
    <StartScreenProgress progress={progress} />
    {
      infoMessage
    }
    {
      errorMessage && (
        <ErrorMessage message={errorMessage} />
      )
    }
  </StartScreenContainer>
);

export default StartScreenView;
