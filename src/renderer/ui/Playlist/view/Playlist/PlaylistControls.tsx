import * as React from 'react';

import MdClear from 'react-icons/lib/md/clear-all';
import e2e from '~shared/data/e2e';
import i18n from '~shared/data/i18n';

import './PlaylistControls.css';

interface IProps {
  onClearPlaylist(p: void): void;
}

export class PlaylistControls extends React.Component<IProps> {

  public render(): React.ReactElement<IProps> {
    return(
      <div className='playlist-controls'>
        <button
          type='button'
          id={e2e.PLAYLIST_CLEAR_BUTTON_ID}
          title={i18n.CLEAR_PLAYLIST}
          className='playlist__clear-button round-button'
          onClick={this.handleClick}
        >
          <MdClear />
        </button>
      </div>
    );
  }

  private handleClick = (): void => {
    this.props.onClearPlaylist(undefined);
  }
}
