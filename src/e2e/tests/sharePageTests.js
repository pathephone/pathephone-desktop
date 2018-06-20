/* eslint-env mocha */
import { startApp, closeApp } from '~reusable/app'
import {
  openDiscoverPage,
  openSharePage
} from '~reusable/navigation'
import {
  discoverFeedDoesNotExist,
  discoverFeedLengthEquals
} from '~reusable/discoverPage'

describe('SHARE PAGE TESTS', function () {
  before(async function () {
    await startApp.call(this)
    await openSharePage.call(this)
  })

  require('./sharing/selectWrongFiles')
  require('./sharing/selectTrackFiles')
  // TODO: require('./sharePage/selectFolderWithoutAudio')
  // TODO: require('./sharePage/selectFolderWithAudio')
  require('./sharing/checkFormValues')
  require('./sharing/checkFormValidation')
  require('./sharing/checkCoverInput')
  require('./sharing/checkTracksOperations')

  describe('check discover feed', () => {
    before(openDiscoverPage)
    it('discover feed is empty', discoverFeedDoesNotExist)
    after(openSharePage)
  })

  require('./sharing/submitValidForm')

  describe('check discover feed', () => {
    before(openDiscoverPage)
    it('discover feed has 1 item', function () {
      return discoverFeedLengthEquals.call(this, 1)
    })
  })
  after(closeApp)
})
