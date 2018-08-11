import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const NavigationItem = ({
  path, title, icon, id, hasIndicator,
}) => (
  <NavLink
    to={path}
    id={id}
    className="navigation__item"
    activeClassName="navigation__item--active"
  >
    {icon}
    <span>
      {title}
    </span>
    {
      hasIndicator && (
        <div className="navigationItemIndicator" />
      )
    }
  </NavLink>
);

NavigationItem.propTypes = {
  path: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  icon: propTypes.object.isRequired,
  hasIndicator: propTypes.bool,
  id: propTypes.string,
};

export default NavigationItem;
