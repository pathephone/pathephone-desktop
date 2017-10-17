import React from 'react';
import { Container } from 'semantic-ui-react';
import bind from '../utils/recallReact';
import { currentPage } from '../state';
import PageAlbums from './PageAlbums';

const getPageViewByName = (name) => {
  if (name === 'albums') {
    return PageAlbums;
  }
};

const Page = ({ page }) => {
  const { name, props } = page;
  const PageView = getPageViewByName(name);
  return (
    <Container>
      <PageView {...props} />;
    </Container>
  );
};

export default bind({ page: currentPage }, Page);
