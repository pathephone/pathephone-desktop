/* eslint-env mocha */
import { openSharePage } from '~reusable/sharePage'
import {
  discoverFeedDoesNotExist,
  openDiscoverPage,
  discoverFeedLengthIs
} from '~reusable/discoverPage'

describe('share page', function () {
  describe('click share album navigation link', () => {
    it('share page appears', openSharePage)
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
      return discoverFeedLengthIs.call(this, 1)
    })
  })
})
