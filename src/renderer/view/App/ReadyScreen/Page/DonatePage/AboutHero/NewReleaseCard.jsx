
import React from 'react'
import propTypes from 'prop-types'

import AssetsButtons from './NewReleaseCard/AssetsButtons.jsx'

import './NewReleaseCard.css'

const NewReleaseCard = props => {
  const { newReleaseName } = props
  return (
    <div className='newReleaseCardContainer'>
      <h4 className='newReleaseCardTitle'>
        new version is available
      </h4>
      <h5>{newReleaseName}</h5>
      <hr />
      <AssetsButtons {...props} />
      <br />
      <a className='githubReleaseLink' href='https://github.com/pathephone/pathephone-desktop/releases/latest'>
        <small>available for Mac, Windows and Linux</small>
      </a>
    </div>
  )
}

NewReleaseCard.propTypes = {
  newReleaseName: propTypes.string.isRequired,
  newReleaseAssets: propTypes.array.isRequired
}

export default NewReleaseCard
