import * as React from 'react';

import MdPause from 'react-icons/lib/md/pause';
import MdPlay from 'react-icons/lib/md/play-arrow';
import MdSkipNext from 'react-icons/lib/md/skip-next';
import MdSkipPrev from 'react-icons/lib/md/skip-previous';

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
