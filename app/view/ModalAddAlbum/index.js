import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import FormAddAlbum from './FormAddModal';

const ModalModalExample = () => (
  <Modal trigger={<Button>Share an album</Button>}>
    <Modal.Header>Share an album</Modal.Header>
    <Modal.Content>
      <FormAddAlbum />
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;
