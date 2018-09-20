import * as React from 'react';

import { default as MdRepeat } from 'react-icons/lib/md/repeat';
import { default as MdShuffle } from 'react-icons/lib/md/shuffle';

interface IProps {
  isShuffleTurnedOn: boolean;
  isRepeatTurnedOn: boolean;
  onToggleRepeat(): void;
  onToggleShuffle(): void;
}

export const ControlsRight: React.SFC<IProps> = (
  props: IProps
) : React.ReactElement<IProps> => (
  <div className='player__rest-controls'>
    <button
      type='button'
      className={props.isShuffleTurnedOn ? 'player__toggle--active' : 'player__toggle'}
      onClick={props.onToggleShuffle}
    >
      <MdShuffle />
    </button>
    <button
      type='button'
      className={props.isRepeatTurnedOn ? 'player__toggle--active' : 'player__toggle'}
      onClick={props.onToggleRepeat}
    >
      <MdRepeat />
    </button>
  </div>
);
