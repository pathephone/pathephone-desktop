import React from 'react';

import './SocialLink.css';

interface IProps {
  link: string;
  children: React.ReactNode;
}

export const SocialLink: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <a href={props.link} className='socialLink'>
    {props.children}
  </a>
);
