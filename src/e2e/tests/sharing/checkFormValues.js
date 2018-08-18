import {
  shareCancelForm,
  shareWaitForDropZoneExists,
  shareDropZoneSelect,
  coverPreviewHasIamge,
  shareFormTracklistLengthEquals,
  validateTrackFields,
} from '~reusable/sharePage';

import { tracks } from '~data/assets';
import e2e from '~data/e2e';

describe('check form values', () => {
  tracks.forEach((track, index) => {
    describe(`track #${index + 1} selected`, () => {
      before(function () {
        return shareDropZoneSelect.call(this, track.file);
      });
      it('has no album cover preview', async function () {
        const hasImage = await coverPreviewHasIamge.call(this);
        expect(hasImage).equal(false);
      });
      it('album artist value matches', async function () {
        const { app } = this;
        await app.client
          .waitForExist(e2e.SHARE_FORM_ARTIST_INPUT_ID);
        const value = await app.client
          .$(e2e.SHARE_FORM_ARTIST_INPUT_ID)
          .getValue();
        expect(value).equal(track.artist);
      });
      it('album title value matches', async function () {
        const { app } = this;
        const value = await app.client
          .$(e2e.SHARE_FORM_TITLE_INPUT_ID)
          .getValue();
        expect(value).equal(track.album);
      });
      it('tracklist has 1 item length', function () {
        return shareFormTracklistLengthEquals.call(this, 1);
      });
      it('track fields values should match', function () {
        return validateTrackFields.call(this, 1, track);
      });

      after(async function () {
        await shareCancelForm.call(this);
        await shareWaitForDropZoneExists.call(this);
      });
    });
  });
});
