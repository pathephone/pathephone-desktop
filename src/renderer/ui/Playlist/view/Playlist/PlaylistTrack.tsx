import * as React from 'react';

import MdClose from 'react-icons/lib/md/close';
import MdGet from 'react-icons/lib/md/file-download';

import './PlaylistTrack.css';

interface IProps {
  title: string;
  artist: string;
  order: string;
  isCurrent: boolean;
  isDownloaded: boolean;
  onRemoveClick(): void;
  onPlayClick(): void;
}

export type IPlaylistTrackProps = IProps;

export class PlaylistTrack extends React.Component<IProps> {
  public handlePlayClick = (): void => {
    this.props.onPlayClick();
  }

  public handleRemoveClick = (): void => {
    this.props.onRemoveClick();
  }

  public render(): React.ReactElement<IProps> {
    const {
      title, artist, isCurrent, isDownloaded, order
    } = this.props;

    return (
      <div
        className={
          `playlist-track ${isDownloaded ? '' : 'playlist-track--downloading'}`
        }
        style={{ order: Number(order) }}
      >
        <button
          type='button'
          className={`playlist-track__button ${isCurrent ? 'playlist-track__current' : ''}`}
          disabled={isCurrent}
          onClick={this.handlePlayClick}
        >
          <span title={title} className='playlist-track__title'>
            {
              !isDownloaded && (
                <MdGet className='playlist-track__download-icon animated flash infinite' />
              )
            }
            {title}
          </span>
          <small title={artist} className='playlist-track__artist-name'>
            {artist}
          </small>
        </button>
        <button
          type='button'
          className='playlist-track__remove round-button'
          onClick={this.handleRemoveClick}
        >
          <MdClose />
        </button>
      </div>
    );
  }
}
