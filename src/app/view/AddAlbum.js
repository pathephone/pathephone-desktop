import React from 'react'
import ReactToggleView from 'react-toggle-view'
import AddAlbumModal from './AddAlbum/AddAlbumModal'

const Trigger = ({ showView }) => (
  <button onClick={showView} id='add-album_open'>
    add album
  </button>
)

const View = ({ hideView }) => (
  <AddAlbumModal onClose={hideView} />
)

const AddAlbum = () => (
  <ReactToggleView
    Trigger={Trigger}
    View={View}
  />
)

export default AddAlbum
