import React from 'react';

import { ParagraphScreen } from '~renderer/components/ParagraphScreen';
import i18n from '~shared/data/i18n';

export const NoSearchResultsScreen: React.SFC = (): React.ReactElement<{}> => (
  <ParagraphScreen title={i18n.NO_ALBUMS_FOUND} />
);
