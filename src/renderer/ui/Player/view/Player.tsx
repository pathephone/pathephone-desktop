import * as React from 'react';

import { InactivePlayerMesage } from '~renderer/ui/Player/components/InactivePlayerMessage';
import { PlayerWrapper } from '~renderer/ui/Player/components/PlayerWrapper';
import { ActivePlayerConnected } from '~renderer/ui/Player/view/ActivePlayerConnected';
import e2e from '~shared/data/e2e';

interface IProps {
  isActive: boolean;
}

export const Player: React.SFC<IProps> = (props: IProps): React.ReactElement<IProps> => (
  <PlayerWrapper
    id={props.isActive ? e2e.PLAYER_ACTIVE_ID : e2e.PLAYER_PENDING_ID}
  >
    {
      props.isActive ? (
        <ActivePlayerConnected />
      ) : (
        <InactivePlayerMesage />
      )
    }
  </PlayerWrapper>
);
