import * as React from 'react';

import { PlaylistTrackConnected } from '~renderer/ui/Playlist/view/Playlist/PlaylistTrackConnected';

interface IProps {
  isRemoved: boolean;
  index: string;
}

export type IPlaylistTrackContainerProps = IProps;

export const PlaylistTrackContainer: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> | null => {
  const {
    isRemoved,
    index
  } = props;
  if (isRemoved) {
    return null;
  }

  return (
    <PlaylistTrackConnected index={index} />
  );
};
