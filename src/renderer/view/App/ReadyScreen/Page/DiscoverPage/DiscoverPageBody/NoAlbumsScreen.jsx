import React from 'react';

import {
  E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID,
} from '~data/e2eConstants';
import {
  LOCAL_NO_ALBUMS_SHORT,
  LOCAL_NO_ALBUMS_LONG,
} from '~data/i18nConstants';
import ParagraphScreen from '~components/ParagraphScreen';

const NoAlbumsScreen = () => (
  <ParagraphScreen
    title={LOCAL_NO_ALBUMS_SHORT}
    paragraph={LOCAL_NO_ALBUMS_LONG}
    id={E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID}
  />
);

export default NoAlbumsScreen;
