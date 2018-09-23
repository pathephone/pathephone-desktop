import * as React from 'react';

import './EqualizerIcon.css';

export const EqualizerIcon: React.SFC = (): React.ReactElement<{}> => (
  <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1'>
    <defs />
    <g id='icon-equalizer-anim' fill='#4A4A4A'>
      <rect className='eq__bar' id='eq1' x='1' y='8' width='4' height='8' />
      <rect className='eq__bar' id='eq2' x='6' y='1' width='4' height='15' />
      <rect className='eq__bar' id='eq3' x='11' y='4' width='4' height='12' />
    </g>
  </svg>
);
