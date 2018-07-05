import React from 'react'

import suatmm from './DonateCard/suatmm.gif'

import './DonateCard.css'

const DonateCard = () => (
  <div className='donateCard'>
    <img className='donateGif' src={suatmm} />
    <br />
    <div className='yandexCard'>
      <iframe src='https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=To%20support%20Pathephone%20development&targets-hint=&default-sum=&button-text=14&payment-type-choice=on&hint=&successURL=&quickpay=shop&account=410015891281482' width='423' height='226' frameBorder='0' allowTransparency='true' scrolling='no' />
    </div>
    <table className='cryptoTable'>
      <tr>
        <td><b>Bitcoin</b></td>
        <td>1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk</td>
      </tr>
      <tr>
        <td><b>Ethereum</b></td>
        <td>0x7571FfD6D59A275FEda3a7AA5e6503Fa22E91CF8</td>
      </tr>
      <tr>
        <td><b>Bitcoin Cache</b></td>
        <td>1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk</td>
      </tr>
    </table>
  </div>
)

export default DonateCard
