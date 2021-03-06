import React from 'react';
import propTypes from 'prop-types';
import MdRefresh from 'react-icons/lib/md/refresh';

import e2e from '~shared/data/e2e';

import AlbumConnected from './FeedScreen/AlbumConnected';

import './FeedScreen.css';

const handleAlbumsCidsMap = albumId => <AlbumConnected albumId={albumId} key={albumId} />;

class FeedScreen extends React.Component {
  handleRefreshButtonClick = () => {
    this.props.onRefreshButtonClick();
  }

  render() {
    const {
      title,
      albumsIds,
      hasRefreshButton,
    } = this.props;
    return (
      <React.Fragment>
        <div className="feed-screen__title-bar">
          <h4 className="albums-page__title">
            {title}
          </h4>
          {
            hasRefreshButton && (
              <button
                type="button"
                className="feed-screen__refresh-button"
                onClick={this.handleRefreshButtonClick}
              >
                <MdRefresh />
                <small className="feed-screen__refresh-text">
new albums available
                </small>
              </button>
            )
          }
        </div>
        <div id={e2e.DISCOVER_FEED_ID} className="albums-page__feed">
          {
            albumsIds.map(handleAlbumsCidsMap)
          }
        </div>
      </React.Fragment>
    );
  }
}

FeedScreen.propTypes = {
  albumsIds: propTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  title: propTypes.string.isRequired,
  hasRefreshButton: propTypes.bool.isRequired,
  onRefreshButtonClick: propTypes.func.isRequired,
};

export default FeedScreen;
