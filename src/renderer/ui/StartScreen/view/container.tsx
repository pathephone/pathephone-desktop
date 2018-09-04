import * as React from 'react';

import ErrorMessage from '~components/ErrorMessage';
import StartScreenProgress from './components/StartScreenProgress';
import StartScreenWrapper from './components/StartScreenWrapper';

interface IProps {
  errorMessage?: string;
  infoMessage?: string;
  progress: number;
}

const StartScreenContainer: React.StatelessComponent<IProps> = ({
  errorMessage, infoMessage, progress,
}) => (
  <StartScreenWrapper>
    <StartScreenProgress progress={progress} />
    {
      infoMessage
    }
    {
      errorMessage && (
        <ErrorMessage message={errorMessage} />
      )
    }
  </StartScreenWrapper>
);

export default StartScreenContainer;
