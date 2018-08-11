import React from 'react';
import propTypes from 'prop-types';

import './CustomButton.css';

const CustomButton = ({ children, ...restProps }) => (
  <button {...restProps} className="customButton">
    {children}
  </button>
);

CustomButton.propTypes = {
  children: propTypes.node.isRequired,
};

export default CustomButton;
