import React from 'react';

import { startScreenStyles } from '~renderer/ui/StartScreen/styles';

interface IProps {
  message: string;
}

const StartScreenError: React.SFC<IProps> = ({ message }) => (
  <h4 className={startScreenStyles.error}>
    {message}
  </h4>
);

export { StartScreenError };
