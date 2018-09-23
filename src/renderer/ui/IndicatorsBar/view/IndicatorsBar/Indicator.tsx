import React from 'react';

import { IconBaseProps } from 'react-icon-base';
import './Indicator.css';

interface IProps {
  text: string;
  isAccented?: boolean;
  tooltip?: string;
  Icon?: React.ComponentClass<IconBaseProps>;
}

export const Indicator: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <span title={props.tooltip} className={props.isAccented ? 'indicatorAccented' : 'indicator'}>
    {
      props.Icon && <props.Icon />
    }
    {props.text}
  </span>
);
