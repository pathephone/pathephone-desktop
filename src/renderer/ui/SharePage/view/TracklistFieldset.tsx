import React from 'react';

import e2e from '~shared/data/e2e';
import i18n from '~shared/data/i18n';

import { IShareFormTrack } from '~renderer/ui/SharePage/types';
import './TracklistFieldset.css';
import TrackInput from './TracklistFieldset/TrackInput';

interface IProps {
  isDisabled: boolean;
  errorMessage: string;
  tracks: IShareFormTrack[];
  onMoveTrackDown(i: number): void;
  onMoveTrackUp(i: number): void;
  onRemoveTrack(i: number): void;
}

export class TracklistFieldset extends React.PureComponent<IProps> {
  public handleMap = (
    track: IShareFormTrack, index: number, tracks: IShareFormTrack[]
  ): React.ReactElement<IProps> => {
    const {
      onRemoveTrack,
      onMoveTrackDown,
      onMoveTrackUp
    } = this.props;

    return (
      <TrackInput
        index={index}
        fileName={track.audio}
        onRemoveTrack={onRemoveTrack}
        onMoveTrackDown={onMoveTrackDown}
        onMoveTrackUp={onMoveTrackUp}
        isMoveUpDisabled={index === 0}
        isMoveDownDisabled={index === tracks.length - 1}
        key={index}
      />
    );
  }

  public render(): React.ReactElement<IProps> {
    const {
      tracks,
      isDisabled,
      errorMessage
    } = this.props;

    return (
      <fieldset
        disabled={isDisabled}
        className='tracklistFieldset'
      >
        <legend>
          {`${i18n.TRACKLIST} (${tracks.length})`}
        </legend>
        <div id={e2e.SHARE_FORM_TRACKLIST_ID}>
          {
            tracks.map(this.handleMap)
          }
        </div>
        <div className='addTracksInputContainer'>
          <input
            id={e2e.SHARE_FORM_ADD_TRACK_INPUT_ID}
            className='addTracksInput'
            name='tracks'
            type='file'
            accept='audio/*'
            multiple
          />
          <label
            htmlFor={e2e.SHARE_FORM_ADD_TRACK_INPUT_ID}
            className='addTracksLabel'
          >
            {i18n.ADD_TRACKS}
            {' '}
            <br />
            <span className='noTracksMessage'>
              {errorMessage}
            </span>
          </label>
        </div>
      </fieldset>
    );
  }
}
