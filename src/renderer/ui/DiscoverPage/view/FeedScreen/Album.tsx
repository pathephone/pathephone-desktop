import React from 'react';
import MdAlbum from 'react-icons/lib/md/album';
import MdPlay from 'react-icons/lib/md/play-arrow';
import MdAdd from 'react-icons/lib/md/playlist-add';

import e2e from '~shared/data/e2e';

import './Album.css';

interface IProps {
  hasSelectedView: boolean;
  albumId: number;
  albumCid: string;
  albumArtist: string;
  albumTitle: string;
  albumCoverURL: string;
  isCoverCached: boolean;
  onToggleSelect(id: number): void;
  onAddAlbumToPlaylist(cid: string): void;
  onPlayAlbum(cid: string): void;
}

export type IAlbumProps = IProps;

export class Album extends React.Component<IProps> {
  public handleAlbumClick = (): void => {
    const {
      onToggleSelect,
      albumId
    } = this.props;
    onToggleSelect(albumId);
  }

  public handleQueueAlbumClick = (): void => {
    const {
      onAddAlbumToPlaylist,
      albumCid
    } = this.props;
    onAddAlbumToPlaylist(albumCid);
  }

  public handlePlayAlbumClick = (): void => {
    const {
      onPlayAlbum,
      albumCid
    } = this.props;
    onPlayAlbum(albumCid);
  }

  public render(): React.ReactElement<IProps> {
    const {
      hasSelectedView,
      albumTitle,
      albumArtist,
      albumCoverURL,
      isCoverCached
    } = this.props;

    return (
      <div className={`album${hasSelectedView ? '--selected' : ''}`}>
        <div className='album__cover-actions'>
          <button
            type='button'
            onClick={this.handleAlbumClick}
            className='album__cover'
          >
            {
              isCoverCached ? (
                <img
                  className='album__cover-image'
                  src={albumCoverURL}
                  alt='album cover'
                />
              ) : (
                <MdAlbum
                  className='album__no-cover-icon'
                />
              )
            }
          </button>
          {
            !hasSelectedView && (
              <div className='album__actions'>
                <button
                  type='button'
                  data-e2e={e2e.DISCOVER_ALBUM_QUEUE_BUTTON}
                  className='album__actions-button round-button'
                  onClick={this.handleQueueAlbumClick}
                >
                  <MdAdd />
                </button>
                <button
                  type='button'
                  data-e2e={e2e.DISCOVER_ALBUM_PLAY_BUTTON}
                  className='album__actions-button round-button'
                  onClick={this.handlePlayAlbumClick}
                >
                  <MdPlay />
                </button>
              </div>
            )
          }
        </div>
        <h4
          className='album__title'
          data-e2e={e2e.DISCOVER_ALBUM_TITLE}
        >
          {albumTitle}
        </h4>
        <h5
          className='album__artist'
          data-e2e={e2e.DISCOVER_ALBUM_ARTIST}
        >
          {albumArtist}
        </h5>
      </div>
    );
  }
}
