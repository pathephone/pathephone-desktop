import * as React from 'react';

import { PlaylistControlsConnected } from '~renderer/ui/Playlist/view/Playlist/PlaylistControlsConnected';
import { TracklistConnected } from '~renderer/ui/Playlist/view/Playlist/TracklistConnected';
import i18n from '~shared/data/i18n';

import './Playlist.css';

interface IProps {
  hasTracklist: boolean;
}

export const Playlist: React.SFC<IProps> = (
  ({ hasTracklist }: IProps): React.ReactElement<IProps> => (
    <div className='playlist'>
      {
          hasTracklist ? (
            <React.Fragment>
              <PlaylistControlsConnected />
              <TracklistConnected />
            </React.Fragment>
          ) : (
            <div className='playlist__empty-message'>
              {i18n.PLAYLIST_IS_EMPTY}
            </div>
          )
        }
    </div>
  )
);
