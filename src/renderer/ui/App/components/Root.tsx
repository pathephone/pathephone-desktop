import * as React from 'react';

// tslint:disable-next-line
import './Root.css'

interface IProps {
  children: React.ReactNode;
}

export const Root: React.SFC<IProps> = (props: IProps) : React.ReactElement<IProps> => (
  <div id='root' className='root'>
    {props.children}
  </div>
);
