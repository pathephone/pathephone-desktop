import React from 'react';
import propTypes from 'prop-types';

import './CustomButton.css';

/* eslint-disable react/button-has-type */

const CustomButton = ({ children, ...restProps }) => (
  <button {...restProps} className="customButton">
    {children}
  </button>
);

CustomButton.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.string.isRequired,
};

export default CustomButton;
