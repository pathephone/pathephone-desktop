import * as React from 'react';

import { PlaylistTrackContainerConnected } from '~renderer/ui/Playlist/view/Playlist/PlaylistTrackContainerConnected';
import e2e from '~shared/data/e2e';

import './Tracklist.css';

interface IProps {
  tracksIndexes: string[];
}

export const Tracklist: React.SFC<IProps> = (
  ({ tracksIndexes }: IProps): React.ReactElement<IProps> => (
    <div className='tracklist' id={e2e.PLAYLIST_TRAKLIST_ID}>
      {
        tracksIndexes.map((index: string) => (
          <PlaylistTrackContainerConnected index={index} key={index} />
        ))
      }
    </div>
  )
);
