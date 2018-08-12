import React from 'react';
import propTypes from 'prop-types';

import './Root.css';

const Root = ({ children }) => (
  <div id="root" className="root">
    {children}
  </div>
);

Root.propTypes = {
  children: propTypes.node.isRequired,
};

export default Root;
