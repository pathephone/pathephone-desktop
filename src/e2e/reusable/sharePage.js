import {
  shareFormSelectCover,
  shareFormSubmit,
  shareFormSetAlbumTitle,
  shareWaitForFormExists
} from '~reusable/sharePage/shareForm'
import {
  shareDropZoneSelect,
  shareWaitForDropZoneExists
} from '~reusable/sharePage/shareDropZone'

export * from './sharePage/shareDropZone'
export * from './sharePage/shareForm'

export async function shareAlbum (album, customTitle) {
  await shareDropZoneSelect.call(this, album.tracks[0].file)
  await shareWaitForFormExists.call(this)
  await shareFormSelectCover.call(this, album.cover)
  if (customTitle) {
    await shareFormSetAlbumTitle.call(this, customTitle)
  }
  await shareFormSubmit.call(this)
  await shareWaitForDropZoneExists.call(this)
}
