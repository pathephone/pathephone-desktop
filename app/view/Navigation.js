import React from 'react';
import {
  Menu,
} from 'semantic-ui-react';
import ModalAddAlbum from './ModalAddAlbum/index';

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Menu.Menu position="right">
      <Menu.Item className="item">
        <ModalAddAlbum />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default FixedMenu;
