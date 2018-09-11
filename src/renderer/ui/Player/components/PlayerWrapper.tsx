import * as React from 'react';

import e2e from '~shared/data/e2e';

interface IProps {
  children: React.ReactNode;
  id?: string;
}

export const PlayerWrapper: React.SFC<IProps> = (props: IProps) : React.ReactElement<IProps> => (
  <div
    id={props.id}
    className='player'
  >
    {props.children}
  </div>
);
