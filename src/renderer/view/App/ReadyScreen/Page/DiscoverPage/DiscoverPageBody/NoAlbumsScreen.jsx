import React from 'react';

import {
  ids, i18n
} from '~data';
import ParagraphScreen from '~components/ParagraphScreen';

const NoAlbumsScreen = () => (
  <ParagraphScreen
    title={i18n.NO_ALBUMS_SHORT}
    paragraph={i18n.NO_ALBUMS_LONG}
    id={ids.DISCOVER_NO_ALBUMS_MESSAGE_ID}
  />
);

export default NoAlbumsScreen;
