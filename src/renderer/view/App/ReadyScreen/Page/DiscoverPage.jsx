import React from 'react';
import propTypes from 'prop-types';

import { E2E_DISCOVER_PAGE_ID } from '~data/e2eConstants';

import PageContainer from '~components/PageContainer';

import SearchBarConnected from './DiscoverPage/SearchBarConnected';
import SelectedActionsConnected from './DiscoverPage/SelectedActionsConnected';
import DiscoverPageBodyConnected from './DiscoverPage/DiscoverPageBodyConnected';

import './DiscoverPage.css';

class DiscoverPage extends React.Component {
  componentWillMount = this.props.onWillMount

  componentWillUnmount = this.props.onWillUnmount

  render() {
    const {
      hasSelectedActions,
      hasSearchBar,
    } = this.props;
    return (
      <PageContainer
        id={E2E_DISCOVER_PAGE_ID}
        className="albums-page"
      >
        {
          hasSearchBar && (
            <SearchBarConnected />
          )
        }
        <DiscoverPageBodyConnected />
        {
          hasSelectedActions && (
            <SelectedActionsConnected />
          )
        }
      </PageContainer>
    );
  }
}

DiscoverPage.propTypes = {
  hasSelectedActions: propTypes.bool.isRequired,
  hasSearchBar: propTypes.bool.isRequired,
  onWillMount: propTypes.func.isRequired,
  onWillUnmount: propTypes.func.isRequired,
};

export default DiscoverPage;
