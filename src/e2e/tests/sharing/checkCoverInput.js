import {
  shareDropZoneSelect,
  coverPreviewHasIamge,
  shareCancelForm,
  shareWaitForDropZoneExists,
  shareWaitForFormExists,
} from '~reusable/sharePage';

import e2e from '~shared/data/e2e';

import { txtFile } from '~shared/data/assets/files';
import album1 from '~shared/data/assets/album2';

const testTrack = album1.tracks[0];

describe('check cover input', () => {
  before(async function () {
    await shareDropZoneSelect.call(this, testTrack.file);
    await shareWaitForFormExists.call(this);
  });

  describe('select NOT an image', () => {
    it('throws no error', async function () {
      const { app } = this;
      return app.client.chooseFile(e2e.SHARE_FORM_COVER_INPUT_ID, txtFile);
    });
    it('cover preview remains empty', async function () {
      const hasImage = await coverPreviewHasIamge.call(this);
      expect(hasImage).equal(false);
    });
    it('cover input DOES marked as invalid', function () {
      return expect(
        this.app.client
          .isExisting(`${e2e.SHARE_FORM_COVER_INPUT_ID}:invalid`),
      ).to.eventually.equal(true);
    });
  });

  describe('select an image', () => {
    it('throws no error', async function () {
      const { app } = this;
      return app.client.chooseFile(e2e.SHARE_FORM_COVER_INPUT_ID, album1.cover);
    });
    it('cover preview contains image', async function () {
      const hasImage = await coverPreviewHasIamge.call(this);
      expect(hasImage).equal(true);
    });
    it('cover input DOES NOT marked as invalid', function () {
      return expect(
        this.app.client
          .isExisting(`${e2e.SHARE_FORM_COVER_INPUT_ID}:invalid`),
      ).to.eventually.equal(false);
    });
  });

  after(async function () {
    await shareCancelForm.call(this);
    await shareWaitForDropZoneExists.call(this);
  });
});
