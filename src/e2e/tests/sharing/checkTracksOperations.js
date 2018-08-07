import {
  shareCancelForm,
  shareWaitForDropZoneExists,
  shareDropZoneSelect,
  removeTrack,
  shareFormAddTrack,
  getShareFormTracksLength,
  validateTrackFields,
  moveTrackDown,
  moveTrackUp,
  shareWaitForFormExists,
} from '~reusable/sharePage';

import { tracks } from '~data/assets';
import { lockScreenWaitForNotExists } from '~reusable/lockScreen';

describe('check tracks operations', () => {
  before(async function () {
    await shareDropZoneSelect.call(this, tracks[0].file);
    await shareWaitForFormExists.call(this);
  });

  describe('remove #1 track', () => {
    it('throws no error', function () {
      return removeTrack.call(this, 1);
    });
  });

  describe('add tracks', () => {
    tracks.forEach((track, index) => {
      const expectedLength = index + 1;
      describe(`add track #${expectedLength}`, () => {
        before(async function () {
          await shareFormAddTrack.call(this, track.file);
          await lockScreenWaitForNotExists.call(this);
        });
        it(`tracks length should be ${expectedLength}`, async function () {
          const tracksCount = await getShareFormTracksLength.call(this);
          expect(tracksCount).equal(expectedLength);
        });
      });
    });
  });

  describe('move tracks', () => {
    describe('move track #1 up', () => {
      it('throws error', function () {
        expect(moveTrackUp.call(this, 1)) // eslint-disable-line
          .be.rejected;
      });
      it('#1 remains in place', function () {
        return validateTrackFields.call(this, 1, tracks[0]);
      });
    });

    describe('move track #1 down', () => {
      it('throws no error', async function () {
        return moveTrackDown.call(this, 1);
      });
      it('#1 moved to #2', function () {
        return validateTrackFields.call(this, 2, tracks[0]);
      });
      it('#2 moved to #1', function () {
        return validateTrackFields.call(this, 1, tracks[1]);
      });
    });

    describe('move track #2 down', () => {
      it('throws error', function () {
        expect(moveTrackDown.call(this, 2)) // eslint-disable-line
          .to.be.rejected;
      });
      it('#2 remains in place', function () {
        return validateTrackFields.call(this, 2, tracks[0]);
      });
    });

    describe('move track #2 up', () => {
      it('throws no error', async function () {
        return moveTrackUp.call(this, 2);
      });
      it('#1 moved to #2', function () {
        return validateTrackFields.call(this, 1, tracks[0]);
      });
      it('#2 moved to #1', function () {
        return validateTrackFields.call(this, 2, tracks[1]);
      });
    });
  });

  after(async function () {
    await shareCancelForm.call(this);
    await shareWaitForDropZoneExists.call(this);
  });
});
