import React from 'react';
import propTypes from 'prop-types';
import MdClear from 'react-icons/lib/md/clear-all';

import { i18n } from '~data';
import e2e from '~data/e2e';

import './PlaylistControls.css';

const PlaylistControls = ({ onClearPlaylist }) => (
  <div className="playlist-controls">
    <button
      type="button"
      id={e2e.PLAYLIST_CLEAR_BUTTON_ID}
      title={i18n.CLEAR_PLAYLIST}
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
