import React from 'react'
import suatmm from '~/css/suatmm.gif'

import DonatePill from './DonatePage/DonatePill'
import './DonateModal.css'

const DonatePage = () => (
  <div className='izi-ys'>
    <img src={suatmm} />
    <div className='izi--gap'>
      <DonatePill coin='bitcoin' address='1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk' />
      <DonatePill coin='ethereum' address='0x7571FfD6D59A275FEda3a7AA5e6503Fa22E91CF8' />
      <DonatePill coin='bitcoin cash' address='1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk' />
    </div>
  </div>
)

export default DonatePage
