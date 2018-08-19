import React from 'react';
import propTypes from 'prop-types';

import GithubIcon from 'react-icons/lib/go/mark-github';
import TwitterIcon from 'react-icons/lib/io/social-twitter';
import GlobeIcon from 'react-icons/lib/io/earth';

import getMyAppVersion from '~shared/utils/getMyAppVersion';

import SocialLink from './AboutHero/SocialLink';
import NewReleaseCardConnected from './AboutHero/NewReleaseCardConnected';

import './AboutHero.css';

const Hero = ({ hasNewReleaseCard }) => (
  <div className="aboutHero">
    <h1>
Pathephone
    </h1>
    <div>
v
      {getMyAppVersion()}
    </div>
    {
      hasNewReleaseCard && (
        <React.Fragment>
          <br />
          <NewReleaseCardConnected />
        </React.Fragment>
      )
    }
    <small className="aboutHeroSocial">
      <SocialLink link="https://pathephone.github.io">
        <GlobeIcon />
        {' '}
        <span>
Site
        </span>
      </SocialLink>
      <SocialLink link="https://twitter.com/patheplayer">
        <TwitterIcon />
        {' '}
        <span>
Twitter
        </span>
      </SocialLink>
      <SocialLink link="https://github.com/pathephone">
        <GithubIcon />
        {' '}
        <span>
GitHub
        </span>
      </SocialLink>
    </small>
  </div>
);

Hero.propTypes = {
  hasNewReleaseCard: propTypes.bool.isRequired,
};

export default Hero;
