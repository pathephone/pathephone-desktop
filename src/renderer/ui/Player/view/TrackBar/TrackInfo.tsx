import * as React from 'react';

import secondsTohhmmss from '~shared/utils//secondsTohhmmss';

import './TrackInfo.css';

interface IProps {
  title: string;
  artist: string;
  duration: number;
  currentTime: number;
}

export const TrackInfo: React.SFC<IProps> = (
  props: IProps
) : React.ReactElement<IProps> => (
  <div className='playerTrackInfo'>
    <div className='playerTrackInfoLeft'>
      <div className='playerTrackTitle'>
        {props.title}
      </div>
      <small className='playerTrackArtist'>
        by
        {' '}
        {props.artist}
      </small>
    </div>
    <div className='playerTrackInfoRight'>
      <small>
        {
          props.currentTime > 0
            && `${secondsTohhmmss(props.duration - props.currentTime)} / `
        }
        <span className='playerTrackDuration'>
          {secondsTohhmmss(props.duration)}
        </span>
      </small>
    </div>
  </div>
);
