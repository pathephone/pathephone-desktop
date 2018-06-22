import React from 'react'
import propTypes from 'prop-types'

import { E2E_DISCOVER_FEED_ID } from '~data/e2eConstants'

import AlbumConnected from './FeedScreen/AlbumConnected'

import './FeedScreen.css'

const handleAlbumsCidsMap = albumId => <AlbumConnected albumId={albumId} key={albumId} />

const FeedScreen = ({ title, albumsIds }) => (
  <React.Fragment>
    <h4 className='albums-page__title'>{title}</h4>
    <div id={E2E_DISCOVER_FEED_ID} className='albums-page__feed'>
      {
        albumsIds.map(handleAlbumsCidsMap)
      }
    </div>
  </React.Fragment>
)

FeedScreen.propTypes = {
  albumsIds: propTypes.array.isRequired,
  title: propTypes.string.isRequired
}

export default FeedScreen
