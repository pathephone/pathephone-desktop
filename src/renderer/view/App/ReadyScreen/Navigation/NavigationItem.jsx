import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ path, title, icon }) => (
  <NavLink to={path} className='navigation__item' activeClassName='navigation__item--active'>
    {icon}
    {title}
  </NavLink>
)

NavigationItem.propTypes = {
  path: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  icon: propTypes.object.isRequired
}

export default NavigationItem
