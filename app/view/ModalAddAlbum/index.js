import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import FormAlbum from './FormAlbum';

const ModalAddAlbum = () => (
  <Modal trigger={<Button>Share an album</Button>}>
    <Modal.Header>Share an album</Modal.Header>
    <Modal.Content>
      <FormAlbum />
    </Modal.Content>
  </Modal>
);

export default ModalAddAlbum;
