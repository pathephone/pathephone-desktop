import React from 'react'

import PageContainer from '~components/PageContainer.jsx'

import DonateCard from './DonatePage/DonateCard.jsx'
import AboutHeroConnected from './DonatePage/AboutHeroConnected'

import './DonatePage.css'

const DonatePage = () => (
  <PageContainer className='donatePage'>
    <AboutHeroConnected />
    <DonateCard />
  </PageContainer>
)

export default DonatePage
