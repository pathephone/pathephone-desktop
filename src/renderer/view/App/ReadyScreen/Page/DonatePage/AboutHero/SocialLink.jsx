import React from 'react'
import propTypes from 'prop-types'

import './SocialLink.css'

const SocialLink = ({ link, children }) => (
  <a href={link} className='socialLink'>
    {children}
  </a>
)

SocialLink.propTypes = {
  link: propTypes.string.isRequired,
  children: propTypes.node.isRequired
}

export default SocialLink
