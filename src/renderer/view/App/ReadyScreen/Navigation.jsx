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
  ids
} from '~data';
import {
  LOCAL_DISCOVER_BUTTON,
  LOCAL_SHARE_BUTTON,
  LOCAL_ABOUT_BUTTON,
} from '~data/i18nConstants';

import NavigationItem from './Navigation/NavigationItem';

import './Navigation.css';

const Navigation = ({ hasUpdateIndicator }) => (
  <nav className="navigation">
    <NavigationItem
      id={ids.NAV_DISCOVER_LINK_ID}
      path={ROUTE_ALBUMS}
      title={LOCAL_DISCOVER_BUTTON}
      icon={<DiscoverIcon />}
    />
    <NavigationItem
      id={ids.NAV_SHARE_LINK_ID}
      path={ROUTE_ADD_ALBUM}
      title={LOCAL_SHARE_BUTTON}
      icon={<UploadIcon />}
    />
    <NavigationItem
      path={ROUTE_DONATE}
      title={LOCAL_ABOUT_BUTTON}
      icon={<InfoIcon />}
      hasIndicator={hasUpdateIndicator}
    />
  </nav>
);

Navigation.propTypes = {
  hasUpdateIndicator: propTypes.bool.isRequired,
};

export default Navigation;
