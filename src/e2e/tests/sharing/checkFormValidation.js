import {
  shareCancelForm,
  shareWaitForDropZoneExists,
  shareDropZoneSelect,
  shareFormSubmit,
  shareFormReset,
  shareWaitForFormExists,
} from '~reusable/sharePage';

import { tracks } from '~data/assets';

import {
  E2E_SHARE_FORM_COVER_INPUT_ID,
  E2E_SHARE_FORM_TITLE_INPUT_ID,
  E2E_SHARE_FORM_ARTIST_INPUT_ID,
  E2E_SHARE_FORM_ADD_TRACK_INPUT_ID,
  E2E_SHARE_FORM_COVER_LABEL_ID,
} from '~data/e2eConstants';

const testTrack = tracks[0];

describe('check form validation', () => {
  before(async function () {
    await shareDropZoneSelect.call(this, testTrack.file);
    await shareWaitForFormExists.call(this);
    await shareFormSubmit.call(this);
  });

  describe('submit with a single file selected', () => {
    it('cover input has focus', async function () {
      const { app } = this;
      const isInFocus = await app.client.hasFocus(E2E_SHARE_FORM_COVER_INPUT_ID);
      expect(isInFocus).equal(true);
    });
    it('cover label is visible', async function () {
      const { app } = this;
      const isVisible = await app.client.isVisible(E2E_SHARE_FORM_COVER_LABEL_ID);
      expect(isVisible).equal(true);
    });
  });

  describe('submit empty form', () => {
    before(async function () {
      await shareFormReset.call(this);
      await shareFormSubmit.call(this);
    });
    it('album title input has focus', async function () {
      const { app } = this;
      const isInFocus = await app.client.hasFocus(E2E_SHARE_FORM_TITLE_INPUT_ID);
      expect(isInFocus).equal(true);
    });
    it('album artist input is invalid', async function () {
      const { app } = this;
      const isInvalid = await app.client.isExisting(
        `${E2E_SHARE_FORM_ARTIST_INPUT_ID}:invalid`,
      );
      expect(isInvalid).equal(true);
    });
    it('album cover input is invalid', async function () {
      const { app } = this;
      const isInvalid = await app.client.isExisting(
        `${E2E_SHARE_FORM_COVER_INPUT_ID}:invalid`,
      );
      expect(isInvalid).equal(true);
    });
    it('album tracks input is invalid', async function () {
      const { app } = this;
      const isInvalid = await app.client.isExisting(
        `${E2E_SHARE_FORM_ADD_TRACK_INPUT_ID}:invalid`,
      );
      expect(isInvalid).equal(true);
    });
  });

  after(async function () {
    await shareCancelForm.call(this);
    await shareWaitForDropZoneExists.call(this);
  });
});
