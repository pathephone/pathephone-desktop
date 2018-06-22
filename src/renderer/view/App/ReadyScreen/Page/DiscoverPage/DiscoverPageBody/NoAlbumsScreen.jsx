import React from 'react'

import {
  E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID
} from '~data/e2eConstants'
import ParagraphScreen from '~components/ParagraphScreen.jsx'

const TITLE = 'no albums yet'
const PARAGRAPH = 'Albums will appear gradually, as they are discovered. Also you can add your own albums to the feed, which will makes them available to other members of the network too.'

const NoAlbumsScreen = () => (
  <ParagraphScreen
    title={TITLE}
    paragraph={PARAGRAPH}
    id={E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID}
  />
)

export default NoAlbumsScreen
