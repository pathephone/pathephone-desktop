
import * as React from 'react';

import './TrackBarContainer.css';

interface IProps {
  children: React.ReactNode;
}

export const TrackBarContainer: React.SFC<IProps> = (
  props: IProps
) : React.ReactElement<IProps> => (
  <div className='trackBar__container'>
    {props.children}
  </div>
);
