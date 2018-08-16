import React from 'react';
import propTypes from 'prop-types';

import {
  ids
} from '~data';

import PlaylistTrackContainerConnected from './PlaylistTrackContainerConnected';

import './Tracklist.css';

const Tracklist = ({ tracksIndexes }) => (
  <div className="tracklist" id={ids.PLAYLIST_TRAKLIST_ID}>
    {
      tracksIndexes.map(index => (
        <PlaylistTrackContainerConnected index={index} key={index} />
      ))
    }
  </div>
);

Tracklist.propTypes = {
  tracksIndexes: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Tracklist;
