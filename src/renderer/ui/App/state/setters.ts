import { IAppState } from '~renderer/ui/App/types';

type IUpdateProgress = (state: IAppState, payload: number) => IAppState;

export const updateProgress: IUpdateProgress = (
  state: IAppState, payload: number
) : IAppState => ({
  ...state,
  progress: payload
});
