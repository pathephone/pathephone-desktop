import React from 'react';
import propTypes from 'prop-types';

import ErrorMessage from '~components/ErrorMessage';

import './CloseScreen.css';

const CloseScreen = ({ errorMessage }) => (
  <div className="closeScreen">
    <h4 className="closeScreenText">
closing app
    </h4>
    {
      errorMessage && (
        <ErrorMessage message={errorMessage} />
      )
    }
  </div>
);

CloseScreen.propTypes = {
  errorMessage: propTypes.string.isRequired,
};

export default CloseScreen;
