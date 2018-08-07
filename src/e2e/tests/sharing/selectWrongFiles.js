import { LOCAL_NO_ALBUMS_FOUND } from '~data/i18nConstants';
import { txtFile, svgFile } from '~data/assets/files';

import {
  getNotificationMessage,
  waitForNoNotifications,
} from '~reusable/notifications';

import {
  shareDropZoneSelect,
  shareWaitForDropZoneExists,
} from '~reusable/sharePage';

describe('select wrong files', () => {
  [txtFile, svgFile].forEach((file, index) => {
    describe(`wrong file #${index}`, () => {
      it('throws no error', function () {
        return shareDropZoneSelect.call(this, file);
      });
      it('share drop zone remains', async function () {
        return shareWaitForDropZoneExists.call(this);
      });
      it('correct notification message appears', async function () {
        const message = await getNotificationMessage.call(this);
        expect(message).equal(LOCAL_NO_ALBUMS_FOUND);
      });
      it('notification disappears', async function () {
        await waitForNoNotifications.call(this);
      });
    });
  });
});
