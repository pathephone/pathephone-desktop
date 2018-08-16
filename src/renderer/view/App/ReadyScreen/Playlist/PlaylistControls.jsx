import React from 'react';
import propTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear-all';

import { LOCAL_CLEAR_PLAYLIST } from '~data/i18nConstants';
import { ids } from '~data';

import './PlaylistControls.css';

const PlaylistControls = ({ onClearPlaylist }) => (
  <div className="playlist-controls">
    <button
      type="button"
      id={ids.PLAYLIST_CLEAR_BUTTON_ID}
      title={LOCAL_CLEAR_PLAYLIST}
      className="playlist__clear-button round-button"
      onClick={onClearPlaylist}
    >
      <MdClear />
    </button>
  </div>
);

PlaylistControls.propTypes = {
  onClearPlaylist: propTypes.func.isRequired,
};

export default PlaylistControls;
