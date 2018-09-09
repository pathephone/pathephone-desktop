import * as React from 'react';

import i18n from '~shared/data/i18n';

export const InactivePlayerMesage: React.SFC = () : React.ReactElement<{}> => (
  <b className='player__no-playback-message'>
    {i18n.NO_PLAYBACK}
  </b>
);
