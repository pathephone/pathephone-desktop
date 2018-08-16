import { discoverFeedAlbumClick, discoverPageSelectedBarExists } from '~reusable/discoverPage';

import { ids } from '~data';

describe('select album tests', () => {
  describe('click first time', () => {
    it('throws no errors', function () {
      return discoverFeedAlbumClick.call(this, 1);
    });
    it('selected actions bar appears', async function () {
      const isExists = await discoverPageSelectedBarExists.call(this);
      expect(isExists).equal(true);
    });
  });
  describe('selected actions bar has ...', () => {
    it('correct albums count', async function () {
      const { app } = this;
      return app.client
        .getText(ids.DISCOVER_PAGE_SELECTED_COUNT_ID) === '1';
    });
    it('play selected button', async function () {
      const isExists = await this.app.client
        .isExisting(ids.DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID);
      expect(isExists).equal(true);
    });
    it('has queue selected to playlist button', async function () {
      const isExists = await this.app.client
        .isExisting(ids.DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID);
      expect(isExists).equal(true);
    });
    it('has delete selected button', async function () {
      const isExists = await this.app.client
        .isExisting(ids.DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID);
      expect(isExists).equal(true);
    });
  });
  describe('click second time', () => {
    it('throws no errors', function () {
      return discoverFeedAlbumClick.call(this, 1);
    });
    it('selected actions bar disappears', async function () {
      const isExists = await discoverPageSelectedBarExists.call(this);
      expect(isExists).equal(false);
    });
  });
});
