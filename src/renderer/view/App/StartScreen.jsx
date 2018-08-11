import React from 'react';
import propTypes from 'prop-types';

import ErrorMessage from '~components/ErrorMessage';

import ProgressBar from './StartScreen/ProgressBar';

import './StartScreen.css';

const StartScreen = ({ errorMessage, infoMessage, progress }) => (
  <div className="startScreen">
    <ProgressBar message={infoMessage} percent={progress} />
    {
      errorMessage && (
        <ErrorMessage message={errorMessage} />
      )
    }
  </div>
);

StartScreen.propTypes = {
  errorMessage: propTypes.string,
  progress: propTypes.number.isRequired,
  infoMessage: propTypes.string,
};

export default StartScreen;
