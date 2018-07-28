import React from 'react'
import propTypes from 'prop-types'

import './Indicator.css'

const Indicator = ({ content, tooltip, isAccented }) => (
  <span title={tooltip} className={isAccented ? 'indicatorAccented' : 'indicator'}>
    {content}
  </span>
)

Indicator.propTypes = {
  content: propTypes.oneOfType([
    propTypes.string,
    propTypes.element
  ]),
  tooltip: propTypes.string,
  isAccented: propTypes.bool
}

export default Indicator
