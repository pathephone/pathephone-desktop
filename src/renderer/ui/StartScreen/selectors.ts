import { IStartScreenState } from './state/types';

export const selectProgress = (state: any): IStartScreenState => (
  state.startScreen.progress
);
