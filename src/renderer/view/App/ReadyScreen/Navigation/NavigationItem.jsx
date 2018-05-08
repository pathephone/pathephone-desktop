import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ path, title }) => (
  <NavLink to={path} className='navigation__item' activeClassName='navigation__item--active'>
    {title}
  </NavLink>
)

NavigationItem.propTypes = {
  path: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}

export default NavigationItem
