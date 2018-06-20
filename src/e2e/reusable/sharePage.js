import { shareFormSelectCover, shareFormSubmit } from '~reusable/sharePage/shareForm'
import { shareDropZoneSelect } from '~reusable/sharePage/shareDropZone'

export * from './sharePage/shareDropZone'
export * from './sharePage/shareForm'

export async function shareAlbum (album) {
  await shareDropZoneSelect.call(this, album.tracks[0].file)
  await shareFormSelectCover.call(this, album.cover)
  await shareFormSubmit.call(this)
}
