import React from 'react'
import ReactToggleView from 'react-toggle-view'
import DonateModal from './Donate/DonateModal'

const Trigger = ({ showView }) => (
  <button onClick={showView} id='add-album_open'>
    donate
  </button>
)

const View = ({ hideView }) => (
  <DonateModal onClose={hideView} />
)

const AddAlbum = () => (
  <ReactToggleView
    Trigger={Trigger}
    View={View}
  />
)

export default AddAlbum
