import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

const StartScreenContainer: React.StatelessComponent<IProps> = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

export default StartScreenContainer;
