import React from 'react';

interface IProps {
  coin: string;
  address: string;
}

export const DonatePill: React.SFC<IProps> = (
  props: IProps
): React.ReactElement<IProps> => (
  <div className='donate-pill'>
    <div className='donate-pill__coin'>
      <b>
        {props.coin}
      </b>
    </div>
    <div className='donate-pill__address'>
      {props.address}
    </div>
  </div>
);
