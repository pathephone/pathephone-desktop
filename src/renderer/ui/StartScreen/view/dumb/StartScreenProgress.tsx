import * as React from 'react';

interface IProps {
  progress: number;
}

const StartScreenProgress: React.StatelessComponent<IProps> = ({ progress }) => (
  <div className="progressBarTotal">
    <div className="progressBarReady" style={{ width: `${progress}%` }} />
  </div>
);

export default StartScreenProgress;
