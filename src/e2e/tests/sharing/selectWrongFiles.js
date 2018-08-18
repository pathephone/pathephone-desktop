import i18n from '~data/i18n';
import { txtFile, svgFile } from '~data/assets/files';

import {
  getNotificationMessage,
  hideNotificationMessage,
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
        await hideNotificationMessage.call(this);
        expect(message).equal(i18n.NO_ALBUMS_FOUND);
      });
    });
  });
});
