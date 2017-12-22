import React from 'react'
import ModalLayer from '../_/ModalLayer'
import ModalWindow from '../_/ModalWindow'
import FormAlbum from './FormAlbum'

const AddAlbumModal = ({ onClose }) => (
  <ModalLayer onMissClick={onClose}>
    <ModalWindow onClose={onClose} title='Add Album'>
      <FormAlbum onSuccess={onClose} />
    </ModalWindow>
  </ModalLayer>
)

export default AddAlbumModal
