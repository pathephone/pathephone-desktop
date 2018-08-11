import React from 'react';
import propTypes from 'prop-types';

import MdVolumeUp from 'react-icons/lib/md/volume-up';
import MdVolumeDown from 'react-icons/lib/md/volume-down';
import MdVolumeMute from 'react-icons/lib/md/volume-mute';
import MdVolumeOff from 'react-icons/lib/md/volume-off';

import './VolumeInput.css';

const VolumeInput = ({ currentVolume, onVolumeChange }) => {
  const handleChange = (e) => {
    const { value } = e.currentTarget;
    onVolumeChange(value / 100);
  };
  const inputValue = currentVolume * 100;
  return (
    <div className="volumeControl">
      <div className="volumeIcon">
        {
          inputValue === 0 ? (
            <MdVolumeOff />
          ) : inputValue < 33 ? (
            <MdVolumeMute />
          ) : inputValue < 66 ? (
            <MdVolumeDown />
          ) : (
            <MdVolumeUp />
          )
        }
      </div>
      <input
        className="volumeInput"
        type="range"
        min="0"
        max="100"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

VolumeInput.propTypes = {
  currentVolume: propTypes.number.isRequired,
  onVolumeChange: propTypes.func.isRequired,
};

export default VolumeInput;
