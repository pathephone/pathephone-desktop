/* eslint-env mocha */
import assert from 'assert';

import { tracks } from '~shared/data/assets';

import getAudioMetadataFromFsFile from './getAudioMetadataFromFsFile';

describe('readAudioMetadata()', () => {
  tracks.forEach((track) => {
    describe('read file metadata', () => {
      it('metadata matches', async () => {
        const { common } = await getAudioMetadataFromFsFile(track.file);
        assert.strictEqual(common.title, track.title);
        assert.strictEqual(common.album, track.album);
      });
    });
  });
});
