import * as React from 'react';

import { IBufferedMap } from '~shared/utils/getBufferedAudioMap';
import './TrackBuffer.css';

type IBufferedPart = [number, number];

const handleMapBuffer: (p: IBufferedPart) => React.ReactElement<void> = (
  [start, end]: IBufferedPart
) : React.ReactElement<void> => {

  const style: {
    width: string;
    left: string;
  } = {
    width: `${end - start}%`,
    left: `${start}%`
  };

  return <div className='timeline__buffered-piece' style={style} key={`${start}-${end}`} />;
};

interface IProps {
  bufferedMap: IBufferedMap;
}

export const TrackBuffer: React.SFC<IProps> = (
  props: IProps
) : React.ReactElement<IProps> => (
  <div className='timeline__buffered-container'>
    {
      props.bufferedMap
        && props.bufferedMap.map(handleMapBuffer)
    }
  </div>
);
