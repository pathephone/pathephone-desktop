import { Selector } from 'react-redux';

export const selectProgress: Selector<> = (state: any): number => (
  state.startScreen.progress
);
