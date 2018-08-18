import React from 'react';
import propTypes from 'prop-types';

import UploadIcon from 'react-icons/lib/md/share';
import DiscoverIcon from 'react-icons/lib/md/search';
import InfoIcon from 'react-icons/lib/md/info';

import {
  ROUTE_ADD_ALBUM,
  ROUTE_ALBUMS,
  ROUTE_DONATE,
} from '~data/constants';
import {
  i18n,
} from '~data';
import e2e from '~data/e2e';

import NavigationItem from './Navigation/NavigationItem';

import './Navigation.css';

const Navigation = ({ hasUpdateIndicator }) => (
  <nav className="navigation">
    <NavigationItem
      id={e2e.NAV_DISCOVER_LINK_ID}
      path={ROUTE_ALBUMS}
      title={i18n.DISCOVER_BUTTON}
      icon={<DiscoverIcon />}
    />
    <NavigationItem
      id={e2e.NAV_SHARE_LINK_ID}
      path={ROUTE_ADD_ALBUM}
      title={i18n.SHARE_BUTTON}
      icon={<UploadIcon />}
    />
    <NavigationItem
      path={ROUTE_DONATE}
      title={i18n.ABOUT_BUTTON}
      icon={<InfoIcon />}
      hasIndicator={hasUpdateIndicator}
    />
  </nav>
);

Navigation.propTypes = {
  hasUpdateIndicator: propTypes.bool.isRequired,
};

export default Navigation;
