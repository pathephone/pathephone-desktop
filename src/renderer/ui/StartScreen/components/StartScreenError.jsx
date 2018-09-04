import React from 'react';
import propTypes from 'prop-types';

import styles from './styles';

const StartScreenError = ({ message }) => (
  <h4 className={styles.error}>
    {message}
  </h4>
);

StartScreenError.propTypes = {
  message: propTypes.string.isRequired,
};

export default StartScreenError;
