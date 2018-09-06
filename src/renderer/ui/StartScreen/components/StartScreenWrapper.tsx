import React from 'react';

import { startScreenStyles } from '~renderer/ui/StartScreen/styles';

interface IProps {
  children: React.ReactNode;
}

const StartScreenWrapper: React.StatelessComponent<IProps> = ({ children }) => (
  <div className={startScreenStyles.wrapper} >
    {children}
  </div>
);

export default StartScreenWrapper;
