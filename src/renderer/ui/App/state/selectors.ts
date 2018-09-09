import { Selector } from 'reselect';

import { IRootState } from '~renderer/state/rootState';
import { IAppState } from '~renderer/ui/App/types';

export const getAppState: Selector<IRootState, IAppState> = (
  (state: IRootState) : IAppState => state.app
);

export const isAppReady: Selector<IRootState, IAppState> = (
  (state: IRootState) : IAppState => state.app
);
