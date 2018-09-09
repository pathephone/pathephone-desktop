import { Selector } from 'reselect';

import { IRootState } from '~renderer/state/rootState';
import { IPlayerState } from '~renderer/ui/Player/types';

export const getPlayerState: Selector<IRootState, IPlayerState> = (
  state: IRootState
): IPlayerState => state.player;
