import React from 'react'
import propTypes from 'prop-types'

const Root = ({ children }) => (
  <div id='root' className='izi-vw-scale-factor-5 izi-fill izi--adaptive'>
    {children}
  </div>
)

Root.propTypes = {
  children: propTypes.object.isRequired
}

export default Root
