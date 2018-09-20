import * as React from 'react';

import { default as MdPause } from 'react-icons/lib/md/pause';
import { default as MdPlay } from 'react-icons/lib/md/play-arrow';
import { default as MdSkipNext } from 'react-icons/lib/md/skip-next';
import { default as MdSkipPrev } from 'react-icons/lib/md/skip-previous';

interface IProps {
  hasPauseIcon: boolean;
  onPlayNextClick(): void;
  onPlayPreviousClick(): void;
  onPlaybackToggle(): void;
}

export const ControlsLeft: React.SFC<IProps> = (
  props: IProps
) : React.ReactElement<IProps> => (
  <div className='player__playback-controls'>
    <button
      type='button'
      className='round-button'
      onClick={props.onPlayPreviousClick}
    >
      <MdSkipPrev />
    </button>
    <button
      type='button'
      className='round-button'
      onClick={props.onPlaybackToggle}
    >
      {
        props.hasPauseIcon
          ? <MdPause />
          : <MdPlay />
      }
    </button>
    <button
      type='button'
      className='round-button'
      onClick={props.onPlayNextClick}
    >
      <MdSkipNext />
    </button>
  </div>
);
