/* eslint-env mocha */
import path from 'path'
import id3 from './id3'
import assert from 'assert'
import track1 from '$/resources/music/track1.flac'
import track2 from '$/resources/music/track2.mp3'

const track1path = path.resolve(__dirname, track1)
const track2path = path.resolve(__dirname, track2)

describe('id3', function () {
  this.timeout(8000)

  describe('metatags', function () {
    it('mp3', async function () {
      const tags = await id3({ path: track2path })
      assert.equal(tags.title, 'Memories (Memories EP Version)')
      assert.equal(tags.album, 'Memories')
      assert.equal(parseInt(tags.bitrate), 352)
    })

    it('flac', async () => {
      const tags = await id3({ path: track1path })
      assert.equal(tags.title, 'City Under Sky (Intro)')
      assert.equal(tags.album, 'Red Flower')
      assert.equal(parseInt(tags.bitrate), 1052)
    })
  })
})
