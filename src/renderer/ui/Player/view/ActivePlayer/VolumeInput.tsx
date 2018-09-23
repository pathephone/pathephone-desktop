import * as React from 'react';

import MdVolumeDown from 'react-icons/lib/md/volume-down';
import MdVolumeMute from 'react-icons/lib/md/volume-mute';
import MdVolumeOff from 'react-icons/lib/md/volume-off';
import MdVolumeUp from 'react-icons/lib/md/volume-up';

import './VolumeInput.css';

interface IProps {
  currentVolume: number;
  onVolumeChange(v: number): void;
}

export class VolumeInput extends React.Component<IProps> {

  public render(): React.ReactElement<IProps> {
    const inputValue: number = this.props.currentVolume * 100;

    return (
      <div className='volumeControl'>
        <div className='volumeIcon'>
          {
            inputValue === 0 ? (
              <MdVolumeOff />
            ) : inputValue < 33 ? (
              <MdVolumeMute />
            ) : inputValue < 66 ? (
              <MdVolumeDown />
            ) : (
              <MdVolumeUp />
            )
          }
        </div>
        <input

          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={inputValue}

          className='volumeInput'
          type='range'
          min='0'
          max='100'
          value={inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    const { value } = e.currentTarget;
    this.props.onVolumeChange(Number(value) / 100);
  }

}
