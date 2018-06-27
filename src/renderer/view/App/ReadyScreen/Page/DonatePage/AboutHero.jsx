import { remote } from 'electron'
import React from 'react'

import GithubIcon from 'react-icons/lib/go/mark-github'
import TwitterIcon from 'react-icons/lib/io/social-twitter'

import SocialLink from './AboutHero/SocialLink.jsx'

import './AboutHero.css'

const Hero = () => (
  <div className='aboutHero'>
    <h1>Pathephone</h1>
    <div>v{remote.app.getVersion()}</div>
    <div className='aboutHeroSocial'>
      <SocialLink link='https://twitter.com/patheplayer'>
        <TwitterIcon /> Twitter
      </SocialLink>
      <SocialLink link='https://github.com/pathephone'>
        <GithubIcon /> GitHub
      </SocialLink>
    </div>
  </div>
)

export default Hero
