import React from 'react';
import propTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = ({ percent }) => (
  <div className="progressBarContainer">
    <div className="progressBarReady" style={{ width: `${percent}%` }} />
  </div>
);

ProgressBar.propTypes = {
  percent: propTypes.number.isRequired,
};

export default ProgressBar;
