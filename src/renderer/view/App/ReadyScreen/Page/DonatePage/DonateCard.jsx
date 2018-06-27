import React from 'react'

import suatmm from './DonateCard/suatmm.gif'
import DonatePill from './DonateCard/DonatePill.jsx'

import './DonateCard.css'

const DonateCard = () => (
  <div className='donateCard'>
    <img className='donateGif' src={suatmm} />
    <div className='izi--gap'>
      <DonatePill coin='bitcoin' address='1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk' />
      <DonatePill coin='ethereum' address='0x7571FfD6D59A275FEda3a7AA5e6503Fa22E91CF8' />
      <DonatePill coin='bitcoin cash' address='1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk' />
    </div>
  </div>
)

export default DonateCard
