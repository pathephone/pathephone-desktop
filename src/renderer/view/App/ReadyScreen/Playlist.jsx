import React from 'react';
import propTypes from 'prop-types';

import TracklistConnected from './Playlist/TracklistConnected';
import PlaylistControlsConnected from './Playlist/PlaylistControlsConnected';

import './Playlist.css';
import { LOCAL_PLAYLIST_IS_EMPTY } from '~data/i18nConstants';

const Playlist = ({ hasTracklist }) => (
  <div className="playlist">
    {
        hasTracklist ? (
          <React.Fragment>
            <PlaylistControlsConnected />
            <TracklistConnected />
          </React.Fragment>
        ) : (
          <label className="playlist__empty-message">
            {LOCAL_PLAYLIST_IS_EMPTY}
          </label>
        )
      }
  </div>
);

Playlist.propTypes = {
  hasTracklist: propTypes.bool.isRequired,
};

export default Playlist;
