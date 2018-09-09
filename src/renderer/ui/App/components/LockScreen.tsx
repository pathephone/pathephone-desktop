import * as React from 'react';

import e2e from '~shared/data/e2e';

// tslint:disable-next-line
import './LockScreen.css'

export const LockScreen: React.SFC = () : React.ReactElement<void> => (
  <div id={e2e.LOCK_SCREEN_ID} className='lockScreen'>
    processing...
  </div>
);
