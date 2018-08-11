import React from 'react';
import ParagraphScreen from '~components/ParagraphScreen';
import { LOCAL_NO_ALBUMS_FOUND } from '~data/i18nConstants';

const NoSearchResultsScreen = () => (
  <ParagraphScreen title={LOCAL_NO_ALBUMS_FOUND} />
);

export default NoSearchResultsScreen;
