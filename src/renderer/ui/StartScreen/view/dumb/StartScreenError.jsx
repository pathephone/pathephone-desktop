import React from 'react';
import propTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <h4 className="error">
    {message}
  </h4>
);

ErrorMessage.propTypes = {
  message: propTypes.string.isRequired,
};

export default ErrorMessage;
