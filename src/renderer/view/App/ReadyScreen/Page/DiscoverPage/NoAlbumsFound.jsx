import React from 'react'
import {
  E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID
} from '~data/e2eConstants'

const NoAlbumsFound = () => (
  <div
    id={E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID}
    className='albums-page__no-albums'
  >
    <h4 className='izi-gray izi-uppercase'>no albums yet</h4>
    <p className='izi-text-center'>Albums will appear gradually, as they are discovered. Also you can add your own albums to the feed, which will makes them available to other members of the network too.</p>
  </div>
)

export default NoAlbumsFound
