import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({ path, title, icon, id }) => (
  <NavLink
    to={path}
    id={id}
    className='navigation__item'
    activeClassName='navigation__item--active'
  >
    {icon}
    <span>
      {title}
    </span>
  </NavLink>
)

NavigationItem.propTypes = {
  path: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  icon: propTypes.object.isRequired,
  id: propTypes.string
}

export default NavigationItem
