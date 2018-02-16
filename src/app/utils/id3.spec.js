/* eslint-env mocha */
import path from 'path'
import id3 from './id3'
import assert from 'assert'
import flac from '$/resources/music/track.flac'
import mp3 from '$/resources/music/track.mp3'

const flacpath = path.resolve(__dirname, flac)
const mp3path = path.resolve(__dirname, mp3)

describe('id3', function () {
  this.timeout(8000)

  describe('metatags', function () {
    it('mp3', async function () {
      const tags = await id3({ path: mp3path })
      assert.equal(tags.title, 'Memories (Memories EP Version)')
      assert.equal(tags.album, 'Memories')
      assert.equal(parseInt(tags.bitrate), 352)
    })

    it('flac', async () => {
      const tags = await id3({ path: flacpath })
      assert.equal(tags.title, 'City Under Sky (Intro)')
      assert.equal(tags.album, 'Red Flower')
      assert.equal(parseInt(tags.bitrate), 1052)
    })
  })
})
