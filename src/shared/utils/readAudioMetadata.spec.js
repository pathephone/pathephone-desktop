/* eslint-env mocha */
import readAudioMetadata from './readAudioMetadata'
import assert from 'assert'
import flacPath from '~resources/music/track.flac'
import mp3Path from '~resources/music/track.mp3'

describe('readAudioMetadata', function () {
  this.timeout(8000)

  describe('metatags', function () {
    it('mp3', async function () {
      const tags = await readAudioMetadata(mp3Path)
      assert.equal(tags.title, 'Memories (Memories EP Version)')
      assert.equal(tags.album, 'Memories')
      assert.equal(parseInt(tags.bitrate), 352)
    })

    it('flac', async () => {
      const tags = await readAudioMetadata(flacPath)
      assert.equal(tags.title, 'City Under Sky (Intro)')
      assert.equal(tags.album, 'Red Flower')
      assert.equal(parseInt(tags.bitrate), 1052)
    })
  })
})
