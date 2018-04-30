import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavigationItem = ({ path, title }) => (
  <Link to={path} className='navigation__item'>
    {title}
  </Link>
)

NavigationItem.propTypes = {
  path: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}

export default NavigationItem
