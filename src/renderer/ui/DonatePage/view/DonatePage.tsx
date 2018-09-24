import React from 'react';

import PageContainer from '~components/PageContainer';
import { AboutHeroConnected } from '~renderer/ui/DonatePage/view/AboutHeroConnected';
import { DonateCard } from '~renderer/ui/DonatePage/view/DonateCard';
import './DonatePage.css';

export const DonatePage: React.SFC = (): React.ReactElement<{}> => (
  <PageContainer className='donatePage'>
    <AboutHeroConnected />
    <DonateCard />
  </PageContainer>
);
