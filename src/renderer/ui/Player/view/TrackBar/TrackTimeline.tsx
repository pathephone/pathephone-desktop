import * as React from 'react';

import './TrackTimeline.css';

interface IProps {
  currentTime: number;
  duration: number;
  onStopSeeking(p: number): void;
}

interface IState {
  seekValue?: number;
}

export class TrackTimeline extends React.PureComponent<IProps, IState> {
  public state: IState = {
    seekValue: undefined
  };

  public componentWillReceiveProps(nextProps: IProps) : void {
    if (nextProps.currentTime === this.state.seekValue) {
      this.setState({
        seekValue: undefined
      });
    }
  }

  public handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    const { value } = e.currentTarget;
    this.setState({
      seekValue: Number(value)
    });
  }

  public handleRangeMouseUp = () : void => {
    const { onStopSeeking } = this.props;
    const { seekValue } = this.state;
    if (seekValue) {
      onStopSeeking(this.state.seekValue);
    }
  }

  public handleRangeKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) : void => {
    if (e.keyCode === 37 || e.keyCode === 39) {
      const { onStopSeeking } = this.props;
      const { seekValue } = this.state;
      if (seekValue) {
        onStopSeeking(this.state.seekValue);
      }
    }
  }

  public render() : React.ReactElement<IProps> {
    const { currentTime, duration } = this.props;
    const { seekValue } = this.state;
    const nextValue: number = seekValue || currentTime;

    return (
      <input

        aria-valuemax={duration}
        aria-valuemin={0}
        aria-valuenow={nextValue}

        className='timelineInput'
        type='range'
        min='0'
        max={duration}
        value={nextValue}
        onChange={this.handleRangeChange}
        onMouseUp={this.handleRangeMouseUp}
        onKeyUp={this.handleRangeKeyUp}
      />
    );
  }
}
