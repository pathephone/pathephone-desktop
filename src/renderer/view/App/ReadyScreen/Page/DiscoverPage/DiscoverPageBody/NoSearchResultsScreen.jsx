import React from 'react';
import ParagraphScreen from '~components/ParagraphScreen';
import { i18n } from '~data';

const NoSearchResultsScreen = () => (
  <ParagraphScreen title={i18n.NO_ALBUMS_FOUND} />
);

export default NoSearchResultsScreen;
