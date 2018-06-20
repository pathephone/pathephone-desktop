/* eslint-env mocha */
import readAudioMetadata from './readAudioMetadata'
import assert from 'assert'

import { tracks } from '~data/assets'

describe('readAudioMetadata()', function () {
  tracks.forEach((track) => {
    describe('read file metadata', function () {
      it('metadata matches', async () => {
        const tags = await readAudioMetadata(track.file)
        assert.equal(tags.title, track.title)
        assert.equal(tags.album, track.album)
        assert.equal(parseInt(tags.bitrate), track.bitrate)
      })
    })
  })
})
