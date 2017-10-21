import React from 'react';
import bind from 'utils/recallReact';
import currentPage from 'state/page';
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
    <PageView {...props} />
  );
};

export default bind({ page: currentPage }, Page);
