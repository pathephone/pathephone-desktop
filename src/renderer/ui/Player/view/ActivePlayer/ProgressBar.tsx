import * as React from 'react';

import './ProgressBar.css';

export const ProgressBar: React.SFC<{}> = () : React.ReactElement<{}> => (
  <div className='player-progress__container'>
    <div className='player-progress__outer'>
      <div className='player-progress__inner' />
    </div>
  </div>
);
