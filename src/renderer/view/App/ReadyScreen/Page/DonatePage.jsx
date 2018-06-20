import React from 'react'
import suatmm from './DonatePage/suatmm.gif'

import PageContainer from '~components/PageContainer.jsx'

import DonatePill from './DonatePage/DonatePill.jsx'

import './DonatePage.css'

const DonatePage = () => (
  <PageContainer className='izi-ys'>
    <img className='donateGif' src={suatmm} />
    <div className='izi--gap'>
      <DonatePill coin='bitcoin' address='1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk' />
      <DonatePill coin='ethereum' address='0x7571FfD6D59A275FEda3a7AA5e6503Fa22E91CF8' />
      <DonatePill coin='bitcoin cash' address='1F67ofBSixvPt9A5kcGKSnk4ZGYXpUSwmk' />
    </div>
  </PageContainer>
)

export default DonatePage
