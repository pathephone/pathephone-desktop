import React from 'react';
import MdRefresh from 'react-icons/lib/md/refresh';

import { AlbumConnected } from '~renderer/ui/DiscoverPage/view/FeedScreen/AlbumConnected';
import e2e from '~shared/data/e2e';
import './FeedScreen.css';

interface IProps {
  albumsIds: number[];
  title: string;
  hasRefreshButton: boolean;
  onRefreshButtonClick(): void;
}

export class FeedScreen extends React.Component<IProps> {

  public handleRefreshButtonClick = (): void => {
    this.props.onRefreshButtonClick();
  }

  public render(): React.ReactElement<IProps> {
    const {
      title,
      albumsIds,
      hasRefreshButton
    } = this.props;

    return (
      <React.Fragment>
        <div className='feed-screen__title-bar'>
          <h4 className='albums-page__title'>
            {title}
          </h4>
          {
            hasRefreshButton && (
              <button
                type='button'
                className='feed-screen__refresh-button'
                onClick={this.handleRefreshButtonClick}
              >
                <MdRefresh />
                <small className='feed-screen__refresh-text'>
new albums available
                </small>
              </button>
            )
          }
        </div>
        <div id={e2e.DISCOVER_FEED_ID} className='albums-page__feed'>
          {
            albumsIds.map(this.handleAlbumsIdsMap)
          }
        </div>
      </React.Fragment>
    );
  }

  private handleAlbumsIdsMap: (id: number) => React.ReactElement<{ albumId: number }> = (
    albumId: number
  ): React.ReactElement<{ albumId: number }> => (
    <AlbumConnected albumId={albumId} key={albumId} />
  )

}
