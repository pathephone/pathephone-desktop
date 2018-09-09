import * as React from 'react';

interface IProps {
  errorMessage?: string;
  progress: number;
}

export const StartScreen: React.StatelessComponent<IProps> = (
  props: IProps
) : React.ReactElement<IProps> => (
  <div className='startScreen__page'>
    <div className='startScreen__progressTotal'>
      <div className='startScreen__progressReady' style={{ width: `${props.progress}%` }} />
    </div>
    {
      props.errorMessage && (
        <h4 className='startScreen__errorMessage'>
          {props.errorMessage}
        </h4>
      )
    }
  </div>
);
