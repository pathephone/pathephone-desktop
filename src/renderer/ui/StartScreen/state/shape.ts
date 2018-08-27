export interface IStartScreenState {
  progress: number;
  errorMessage?: string;
}

export const intialState: IStartScreenState = {
  progress: 0,
};
