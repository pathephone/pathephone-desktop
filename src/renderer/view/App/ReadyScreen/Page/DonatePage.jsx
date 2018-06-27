import React from 'react'

import PageContainer from '~components/PageContainer.jsx'

import AboutHero from './DonatePage/AboutHero.jsx'
import DonateCard from './DonatePage/DonateCard.jsx'

import './DonatePage.css'

const DonatePage = () => (
  <PageContainer className='donatePage'>
    <AboutHero />
    <DonateCard />
  </PageContainer>
)

export default DonatePage
