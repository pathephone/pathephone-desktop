import React from 'react';
import propTypes from 'prop-types';

import MdRepeat from 'react-icons/lib/md/repeat';
import MdShuffle from 'react-icons/lib/md/shuffle';

const ControlsRight = ({
  isRepeatTurnedOn,
  onToggleRepeat,
  isShuffleTurnedOn,
  onToggleShuffle,
}) => (
  <div className="player__rest-controls">
    <button
      className={isShuffleTurnedOn ? 'player__toggle--active' : 'player__toggle'}
      onClick={onToggleShuffle}
    >
      <MdShuffle />
    </button>
    <button
      className={isRepeatTurnedOn ? 'player__toggle--active' : 'player__toggle'}
      onClick={onToggleRepeat}
    >
      <MdRepeat />
    </button>
  </div>
);

ControlsRight.propTypes = {
  isShuffleTurnedOn: propTypes.bool.isRequired,
  isRepeatTurnedOn: propTypes.bool.isRequired,
  onToggleRepeat: propTypes.func.isRequired,
  onToggleShuffle: propTypes.func.isRequired,
};

export default ControlsRight;
