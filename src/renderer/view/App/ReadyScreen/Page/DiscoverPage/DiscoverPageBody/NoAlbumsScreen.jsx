import React from 'react';

import {
  ids
} from '~data';
import {
  LOCAL_NO_ALBUMS_SHORT,
  LOCAL_NO_ALBUMS_LONG,
} from '~data/i18nConstants';
import ParagraphScreen from '~components/ParagraphScreen';

const NoAlbumsScreen = () => (
  <ParagraphScreen
    title={LOCAL_NO_ALBUMS_SHORT}
    paragraph={LOCAL_NO_ALBUMS_LONG}
    id={ids.DISCOVER_NO_ALBUMS_MESSAGE_ID}
  />
);

export default NoAlbumsScreen;
