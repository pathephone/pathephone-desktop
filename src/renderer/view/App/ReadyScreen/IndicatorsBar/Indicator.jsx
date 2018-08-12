import React from 'react';
import propTypes from 'prop-types';

import './Indicator.css';

const Indicator = ({
  text, Icon, tooltip, isAccented,
}) => (
  <span title={tooltip} className={isAccented ? 'indicatorAccented' : 'indicator'}>
    {
      Icon && <Icon />
    }
    {text}
  </span>
);

Indicator.defaultProps = {
  Icon: null,
  tooltip: null,
  isAccented: false,
};

Indicator.propTypes = {
  text: propTypes.string.isRequired,
  Icon: propTypes.func,
  tooltip: propTypes.string,
  isAccented: propTypes.bool,
};

export default Indicator;
