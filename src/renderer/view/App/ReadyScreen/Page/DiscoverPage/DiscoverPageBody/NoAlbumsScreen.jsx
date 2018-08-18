import React from 'react';

import i18n from '~data/i18n';
import e2e from '~data/e2e';

import ParagraphScreen from '~components/ParagraphScreen';

const NoAlbumsScreen = () => (
  <ParagraphScreen
    title={i18n.NO_ALBUMS_SHORT}
    paragraph={i18n.NO_ALBUMS_LONG}
    id={e2e.DISCOVER_NO_ALBUMS_MESSAGE_ID}
  />
);

export default NoAlbumsScreen;
