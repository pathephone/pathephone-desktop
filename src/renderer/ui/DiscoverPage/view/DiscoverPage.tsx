import React from 'react';

import e2e from '~shared/data/e2e';

import { PageContainer } from '~renderer/components/PageContainer';
import { SearchBarConnected } from '~renderer/ui/DiscoverPage/view/DiscoverPage/SearchBarConnected';
import { SelectedActionsConnected } from '~renderer/ui/DiscoverPage/view/DiscoverPage/SelectedActionsConnected';
import { DiscoverPageBodyConnected } from '~renderer/ui/DiscoverPage/view/DiscoverPageBodyConnected';
import './DiscoverPage.css';

interface IProps {
  hasSelectedActions: boolean;
  hasSearchBar: boolean;
  onWillMount(): void;
  onWillUnmount(): void;
}

export class DiscoverPage extends React.Component<IProps> {

  public componentWillMount: () => void = this.props.onWillMount;

  public componentWillUnmount: () => void = this.props.onWillUnmount;

  public render(): React.ReactElement<IProps> {
    const {
      hasSelectedActions,
      hasSearchBar
    } = this.props;

    return (
      <PageContainer
        id={e2e.DISCOVER_PAGE_ID}
        className='albums-page'
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
