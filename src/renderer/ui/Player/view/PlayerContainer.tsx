import * as React from 'react';

import { InactivePlayerMesage } from '~renderer/ui/Player/components/InactivePlayerMessage';
import { PlayerWrapper } from '~renderer/ui/Player/components/PlayerWrapper';
import ActivePlayerConnected from '~renderer/ui/Player/view/ActivePlayerConnected';

interface IProps {
  isActive: boolean;
}

export const PlayerContainer: React.SFC<IProps> = (props: IProps): React.ReactElement<IProps> => (
  <PlayerWrapper>
    {
      props.isActive ? (
        <ActivePlayerConnected />
      ) : (
        <InactivePlayerMesage />
      )
    }
  </PlayerWrapper>
);
