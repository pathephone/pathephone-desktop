import React from 'react'
import propTypes from 'prop-types'

import MdSwap from 'react-icons/lib/md/swap-vert'

const BandwidthIndicator = ({ stat }) => {
  return (
    <span>
      <MdSwap />{
        stat
          ? ` in: ${stat.in} out ${stat.out}`
          : ` --`
      }
    </span>
  )
}

BandwidthIndicator.propTypes = {
  stat: propTypes.oneOfType([
    propTypes.null,
    propTypes.object
  ])
}

export default BandwidthIndicator
