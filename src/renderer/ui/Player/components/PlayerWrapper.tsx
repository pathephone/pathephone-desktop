import * as React from 'react';

import e2e from '~shared/data/e2e';

interface IProps {
  children: React.ReactNode;
}

export const PlayerWrapper: React.SFC<IProps> = (props: IProps) : React.ReactElement<IProps> => (
  <div
    id={e2e.PLAYER_PENDING_ID}
    className='player'
  >
    {props.children}
  </div>
);
