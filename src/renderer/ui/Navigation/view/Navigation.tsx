import React from 'react';

import InfoIcon from 'react-icons/lib/md/info';
import DiscoverIcon from 'react-icons/lib/md/search';
import UploadIcon from 'react-icons/lib/md/share';

import { NavigationItem } from '~renderer/ui/Navigation/view/Navigation/NavigationItem';
import {
  ROUTE_ADD_ALBUM,
  ROUTE_ALBUMS,
  ROUTE_DONATE
} from '~shared/data/constants';
import e2e from '~shared/data/e2e';
import i18n from '~shared/data/i18n';

import './Navigation.css';

interface IProps {
  hasUpdateIndicator: boolean;
}

export const Navigation: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <nav className='navigation'>
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
      hasIndicator={props.hasUpdateIndicator}
    />
  </nav>
);
