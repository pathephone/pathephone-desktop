import React from 'react';

import GithubIcon from 'react-icons/lib/go/mark-github';
import GlobeIcon from 'react-icons/lib/io/earth';
import TwitterIcon from 'react-icons/lib/io/social-twitter';

import { NewReleaseCardConnected } from '~renderer/ui/DonatePage/view/AboutHero/NewReleaseCardConnected';
import { SocialLink } from '~renderer/ui/DonatePage/view/AboutHero/SocialLink';
import getMyAppVersion from '~shared/utils/getMyAppVersion';
import './AboutHero.css';

interface IProps {
  hasNewReleaseCard: boolean;
}

export const AboutHero: React.SFC<IProps> = (props: IProps): React.ReactElement<IProps> => (
  <div className='aboutHero'>
    <h1>
Pathephone
    </h1>
    <div>
v
      {getMyAppVersion()}
    </div>
    {
      props.hasNewReleaseCard && (
        <React.Fragment>
          <br />
          <NewReleaseCardConnected />
        </React.Fragment>
      )
    }
    <small className='aboutHeroSocial'>
      <SocialLink link='https://pathephone.github.io'>
        <GlobeIcon />
        {' '}
        <span>
Site
        </span>
      </SocialLink>
      <SocialLink link='https://twitter.com/patheplayer'>
        <TwitterIcon />
        {' '}
        <span>
Twitter
        </span>
      </SocialLink>
      <SocialLink link='https://github.com/pathephone'>
        <GithubIcon />
        {' '}
        <span>
GitHub
        </span>
      </SocialLink>
    </small>
  </div>
);
