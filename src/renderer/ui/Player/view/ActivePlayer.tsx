import * as React from 'react';

import { ControlsLeftConnected } from '~renderer/ui/Player/view/ActivePlayer/ControlsLeftConnected';
import { ControlsRightConnected } from '~renderer/ui/Player/view/ActivePlayer/ControlsRightConnected';
import { ProgressBar } from '~renderer/ui/Player/view/ActivePlayer/ProgressBar';
import { VolumeInputConnected } from '~renderer/ui/Player/view/ActivePlayer/VolumeInputConnected';
import { TrackBarContainer } from '~renderer/ui/Player/view/TrackBar/TrackBarContainer';
import { TrackBuffer } from '~renderer/ui/Player/view/TrackBar/TrackBuffer';
import { TrackInfo } from '~renderer/ui/Player/view/TrackBar/TrackInfo';
import { TrackTimeline } from '~renderer/ui/Player/view/TrackBar/TrackTimeline';
import { getBufferedAudioMap, IBufferedMap } from '~shared/utils/getBufferedAudioMap';

interface IState {
  duration: null | number;
  currentTime: number;
  bufferedMap: null | IBufferedMap;
  isReadyToPlay: boolean;
}

const getInitialState : () => IState = () : IState => ({
  duration: null,
  currentTime: 0,
  bufferedMap: null,
  isReadyToPlay: false
});

interface IProps {
  volume: number;
  isPaused: boolean;
  source: string;
  title: string;
  artist: string;
  onAudioEnded(): void;
}

export class ActivePlayer extends React.Component<IProps, IState> {

  public state: IState = getInitialState();
  private audio: HTMLAudioElement = new Audio();

  public componentWillMount() : void {
    this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata);
    this.audio.addEventListener('canplaythrough', this.handleCanPlayThrough);
    this.audio.addEventListener('progress', this.handleProgress);
    this.audio.addEventListener('ended', this.handleEnded);
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
    this.handleProps(this.props);
  }

  public componentWillReceiveProps(nextProps: IProps) : void {
    if (this.audio.src !== nextProps.source) {
      this.setState(getInitialState());
    }
    this.handleProps(nextProps);
  }

  public componentWillUnmount() : void {
    this.audio.removeEventListener('loadedmetadata', this.handleLoadedMetadata);
    this.audio.removeEventListener('canplaythrough', this.handleCanPlayThrough);
    this.audio.removeEventListener('progress', this.handleProgress);
    this.audio.removeEventListener('ended', this.handleEnded);
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate);
    this.audio.src = '';
  }

  public handleProps = (props: IProps) : void => {
    const { source = '', volume, isPaused } = props;
    if (this.audio.volume !== volume) {
      this.audio.volume = volume;
    }
    if (this.audio.src !== source) {
      this.audio.src = source;
    }
    if (!isPaused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  public handleCanPlayThrough = () : void => {
    this.setState((state: IState) => ({ ...state, isReadyToPlay: true }));
  }

  public handleLoadedMetadata = () : void => {
    const { duration } = this.audio;
    this.setState((state: IState) => ({ ...state, duration }));
  }

  public handleProgress = () : void => {
    if (this.audio.duration) {
      const bufferedMap: IBufferedMap = getBufferedAudioMap(this.audio);
      this.setState((state: IState) => ({ ...state, bufferedMap }));
    }
  }

  public handleEnded = () : void => {
    this.props.onAudioEnded();
  }

  public handleTimeUpdate = () : void => {
    const { currentTime } = this.audio;
    this.setState((state : IState) => ({ ...state, currentTime }));
  }

  public handleStopSeeking = (time: number) : void => {
    this.audio.currentTime = time;
  }

  public render() : React.ReactElement<IProps> {
    const {
      isReadyToPlay,
      currentTime,
      duration,
      bufferedMap
    } = this.state;
    const { title, artist } = this.props;

    return (
      <>
        <ControlsLeftConnected />
        {
          isReadyToPlay ? (
            <TrackBarContainer>
              <TrackBuffer
                bufferedMap={bufferedMap}
              />
              <TrackInfo
                title={title}
                artist={artist}
                currentTime={currentTime}
                duration={duration}
              />
              <TrackTimeline
                currentTime={currentTime}
                duration={duration}
                onStopSeeking={this.handleStopSeeking}
              />
            </TrackBarContainer>
          ) : (
            <ProgressBar />
          )
        }
        <VolumeInputConnected />
        <ControlsRightConnected />
      </>
    );
  }
}

export type IActivePlayerContainerProps = IProps;
