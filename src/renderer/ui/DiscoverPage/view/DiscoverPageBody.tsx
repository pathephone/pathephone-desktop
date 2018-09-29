import React from 'react';

import ProcessingScreen from '~components/ProcessingScreen';
import { NoAlbumsScreen } from '~renderer/ui/DiscoverPage/view/DiscoverPageBody/NoAlbumsScreen';
import { NoSearchResultsScreen } from '~renderer/ui/DiscoverPage/view/DiscoverPageBody/NoSearchResultsScreen';
import { FeedScreenConnected } from '~renderer/ui/DiscoverPage/view/FeedScreenConnected';
import './DiscoverPageBody.css';

interface IProps {
  hasNoAlbumsScreen: boolean;
  hasNoSearchResultsScreen: boolean;
  hasFeedScreen: boolean;
  hasProcessingScreen: boolean;
  isAlbumsUpdateNeeded: boolean;
  onAlbumsUpdateRequest(): void;
}

export type IDiscoverPageBodyProps = IProps;

export class DiscoverPageBody extends React.Component<IProps> {

  public componentDidUpdate(): void {
    const { isAlbumsUpdateNeeded, onAlbumsUpdateRequest } = this.props;
    if (isAlbumsUpdateNeeded) {
      onAlbumsUpdateRequest();
    }
  }

  public render(): React.ReactElement<IProps> {
    const {
      hasNoAlbumsScreen,
      hasNoSearchResultsScreen,
      hasFeedScreen,
      hasProcessingScreen
    } = this.props;

    return (
      <div
        className='albums-page__body'
      >
        {
          hasNoAlbumsScreen && (
            <NoAlbumsScreen />
          )
        }
        {
          hasNoSearchResultsScreen && (
            <NoSearchResultsScreen />
          )
        }
        {
          hasProcessingScreen && (
            <ProcessingScreen />
          )
        }
        {
          hasFeedScreen && (
            <FeedScreenConnected />
          )
        }
      </div>
    );
  }
}
