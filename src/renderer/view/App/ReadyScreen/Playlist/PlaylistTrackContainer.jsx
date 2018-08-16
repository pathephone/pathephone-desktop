import React from 'react';
import propTypes from 'prop-types';
import PlaylistTrackConnected from './PlaylistTrackConnected';

const PlaylistTrackContainer = (props) => {
  const {
    isRemoved,
    index,
  } = props;
  if (isRemoved) return null;
  return (
    <PlaylistTrackConnected index={index} />
  );
};

PlaylistTrackContainer.propTypes = {
  isRemoved: propTypes.bool.isRequired,
  index: propTypes.string.isRequired,
};

export default PlaylistTrackContainer;
