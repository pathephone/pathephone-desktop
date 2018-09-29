import React from 'react';

import { ParagraphScreen } from '~renderer/components/ParagraphScreen';
import e2e from '~shared/data/e2e';
import i18n from '~shared/data/i18n';

export const NoAlbumsScreen: React.SFC = (): React.ReactElement<{}> => (
  <ParagraphScreen
    title={i18n.NO_ALBUMS_SHORT}
    paragraph={i18n.NO_ALBUMS_LONG}
    id={e2e.DISCOVER_NO_ALBUMS_MESSAGE_ID}
  />
);
