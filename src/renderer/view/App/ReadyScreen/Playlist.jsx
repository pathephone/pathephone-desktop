import React from 'react';
import propTypes from 'prop-types';

import TracklistConnected from './Playlist/TracklistConnected';
import PlaylistControlsConnected from './Playlist/PlaylistControlsConnected';

import './Playlist.css';
import { i18n } from '~data';

const Playlist = ({ hasTracklist }) => (
  <div className="playlist">
    {
        hasTracklist ? (
          <React.Fragment>
            <PlaylistControlsConnected />
            <TracklistConnected />
          </React.Fragment>
        ) : (
          <div className="playlist__empty-message">
            {i18n.PLAYLIST_IS_EMPTY}
          </div>
        )
      }
  </div>
);

Playlist.propTypes = {
  hasTracklist: propTypes.bool.isRequired,
};

export default Playlist;
