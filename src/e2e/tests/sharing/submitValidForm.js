import album1 from '~data/assets/album1'
import { MESSAGE_SHARE_FORM_SUBMIT_SUCCEED } from '~data/textMessages'

import {
  shareDropZoneExists,
  shareDropZoneSelect,
  shareFormSelectCover,
  shareFormSubmit
} from '~reusable/sharePage'
import {
  getNotificationMessage, waitForNotification
} from '~reusable/notifications'

describe('submit valid form', () => {
  before(async function () {
    await shareDropZoneSelect.call(this, album1.tracks[0].file)
    await shareFormSelectCover.call(this, album1.cover)
  })
  it('throws no error', function () {
    return shareFormSubmit.call(this)
  })
  it('correct notification message appears', async function () {
    await waitForNotification.call(this)
    const message = await getNotificationMessage.call(this)
    expect(message).equal(MESSAGE_SHARE_FORM_SUBMIT_SUCCEED)
  })
  it('share drop zone appears', async function () {
    const isExists = await shareDropZoneExists.call(this)
    expect(isExists).equal(true)
  })
})
