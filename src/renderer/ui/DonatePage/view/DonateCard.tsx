import React from 'react';
import MdCreditCard from 'react-icons/lib/md/credit-card';

import './DonateCard.css';
import suatmm from './DonateCard/suatmm.gif';

export const DonateCard: React.SFC = (): React.ReactElement<{}> => (
  <div className='donateCard'>
    <img className='donateGif' alt='Shut up and take my money!' src={suatmm} />
    <br />
    <div className='donateButtons'>
      <a className='donateCreditCardLink' href='https://money.yandex.ru/to/410015891281482'>
        <MdCreditCard />
        {' '}
        <span>
Donate with a credit card
        </span>
      </a>
    </div>
    <table className='cryptoTable'>
      <tr>
        <td>
          <b>
Bitcoin
          </b>
        </td>
        <td>
1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk
        </td>
      </tr>
      <tr>
        <td>
          <b>
Ethereum
          </b>
        </td>
        <td>
0x7571FfD6D59A275FEda3a7AA5e6503Fa22E91CF8
        </td>
      </tr>
      <tr>
        <td>
          <b>
Bitcoin Cash
          </b>
        </td>
        <td>
1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk
        </td>
      </tr>
    </table>
  </div>
);
