import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

interface IProps {
  path: string;
  title: string;
  icon: React.ReactNode;
  id?: string;
  hasIndicator?: boolean;
}

export const NavigationItem: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <NavLink
    to={props.path}
    id={props.id}
    className='navigation__item'
    activeClassName='navigation__item--active'
  >
    {props.icon}
    <span>
      {props.title}
    </span>
    {
      props.hasIndicator && (
        <div className='navigationItemIndicator' />
      )
    }
  </NavLink>
);
