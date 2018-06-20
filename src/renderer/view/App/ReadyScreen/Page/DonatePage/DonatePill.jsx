import React from 'react'
import propTypes from 'prop-types'

const DonatePill = ({ coin, address }) => (
  <div className='donate-pill'>
    <div className='donate-pill__coin'><b>{coin}</b></div>
    <div className='donate-pill__address'>{address}</div>
  </div>
)

DonatePill.propTypes = {
  coin: propTypes.string.isRequired,
  address: propTypes.string.isRequired
}

export default DonatePill
