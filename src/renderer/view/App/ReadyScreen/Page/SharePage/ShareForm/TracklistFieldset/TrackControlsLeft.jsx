import React from 'react';
import propTypes from 'prop-types';

import MdDown from 'react-icons/lib/md/keyboard-arrow-down';
import MdUp from 'react-icons/lib/md/keyboard-arrow-up';
import {
  ids
} from '~data';

const TrackControls = (props) => {
  const {
    onMoveUpClick, onMoveDownClick,
    isMoveUpDisabled, isMoveDownDisabled,
  } = props;
  return (
    <React.Fragment>
      <button
        type="button"
        data-e2e={ids.SHARE_FORM_MOVE_TRACK_UP}
        className="trackInputControlButton"
        disabled={isMoveUpDisabled}
        onClick={onMoveUpClick}
      >
        <MdUp />
      </button>
      <button
        type="button"
        data-e2e={ids.SHARE_FORM_MOVE_TRACK_DOWN}
        className="trackInputControlButton"
        disabled={isMoveDownDisabled}
        onClick={onMoveDownClick}
      >
        <MdDown />
      </button>
    </React.Fragment>
  );
};

TrackControls.defaultProps = {
  isMoveDownDisabled: false,
  isMoveUpDisabled: false,
};

TrackControls.propTypes = {
  onMoveUpClick: propTypes.func.isRequired,
  onMoveDownClick: propTypes.func.isRequired,
  isMoveDownDisabled: propTypes.bool,
  isMoveUpDisabled: propTypes.bool,
};

export default TrackControls;
