import React from 'react';
import propTypes from 'prop-types';

import MdClear from 'react-icons/lib/md/clear';

import { ids } from '~data';

const TrackControls = (props) => {
  const {
    onRemoveClick,
  } = props;
  return (
    <React.Fragment>
      <button
        type="button"
        data-e2e={ids.SHARE_FORM_REMOVE_TRACK}
        onClick={onRemoveClick}
        className="trackInputControlButton"
      >
        <MdClear />
      </button>
    </React.Fragment>
  );
};

TrackControls.propTypes = {
  onRemoveClick: propTypes.func.isRequired,
};

export default TrackControls;
