import { shareFormSelectCover, shareFormSubmit, shareFormSetAlbumTitle } from '~reusable/sharePage/shareForm'
import { shareDropZoneSelect, shareDropZoneExists } from '~reusable/sharePage/shareDropZone'

export * from './sharePage/shareDropZone'
export * from './sharePage/shareForm'

export async function shareAlbum (album, customTitle) {
  await shareDropZoneSelect.call(this, album.tracks[0].file)
  await shareFormSelectCover.call(this, album.cover)
  if (customTitle) {
    await shareFormSetAlbumTitle.call(this, customTitle)
  }
  await shareFormSubmit.call(this)
  await shareDropZoneExists.call(this)
}
