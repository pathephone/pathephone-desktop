/* eslint-env mocha */
import { expect } from 'chai'

import { MESSAGE_NO_ALBUMS_FOUND } from '~data/textMessages'
import { txtFile, svgFile } from '~data/assets/files'

import {
  getLatestNotificationMessage,
  allNotificationsHaveDisappeared
} from '~reusable/notifications'

import { selectFile, shareDropZoneExists } from '~reusable/sharePage'

describe('select wrong files', () => {
  [ txtFile, svgFile ].forEach((file, index) => {
    describe(`wrong file #${index}`, () => {
      it('throws no error', function () {
        return selectFile.call(this, file)
      })
      it('share drop zone remains', async function () {
        return shareDropZoneExists.call(this)
      })
      it('correct notification message appears', async function () {
        const message = await getLatestNotificationMessage.call(this)
        expect(message).equal(MESSAGE_NO_ALBUMS_FOUND)
      })
      it('notification disappears', async function () {
        await allNotificationsHaveDisappeared.call(this)
      })
    })
  })
})
