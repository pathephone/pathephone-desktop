import React from 'react';
import propTypes from 'prop-types';

import './PageContainer.css';

const PageContainer = ({ children, className, ...restProps }) => (
  <div className={`page-container ${className || ''}`} {...restProps}>
    {children}
  </div>
);

PageContainer.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

export default PageContainer;
