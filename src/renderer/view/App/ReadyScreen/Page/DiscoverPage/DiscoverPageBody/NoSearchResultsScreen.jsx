import React from 'react';
import ParagraphScreen from '~components/ParagraphScreen';
import i18n from '~shared/data/i18n';

const NoSearchResultsScreen = () => (
  <ParagraphScreen title={i18n.NO_ALBUMS_FOUND} />
);

export default NoSearchResultsScreen;
