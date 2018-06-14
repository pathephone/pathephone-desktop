import { IS_RENDERER } from '../config'

const id = (id) => {
  if (IS_RENDERER) {
    return id
  }
  return `#${id}`
}

export const E2E_READY_APP_ID = id('ready-app')
export const E2E_SHARE_ALBUM_LINK_ID = id('share-album-link')
export const E2E_SHARE_PAGE_ID = id('share-page')
