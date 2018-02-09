/* eslint-env mocha */
import id3 from '../../src/app/utils/id3'
const assert = require('assert')

describe('id3', function () {
  this.timeout(8000)

  describe('metatags', function () {
    it('mp3', async function () {
      const tags = await id3({path: 'e2e/tests/add-album/test-track.mp3'})
      assert.equal(tags.title, 'City Under Sky (Intro)')
      assert.equal(tags.album, 'Red Flower')
      assert.equal(parseInt(tags.bitrate), 320)
    })

    it('flac', async () => {
      const tags = await id3({path: 'e2e/tests/add-album/test-track-10.flac'})
      assert.equal(tags.title, 'City Under Sky (Intro)')
      assert.equal(tags.album, 'Red Flower')
    })
  })
})
