import React from 'react'
import ModalLayer from './_/ModalLayer'
import ModalWindow from './_/ModalWindow'
import FormAlbum from './AddAlbum/FormAlbum'

const AddAlbumModal = ({ onClose }) => (
  <ModalLayer>
    <ModalWindow onClose={onClose}>
      <FormAlbum />
    </ModalWindow>
  </ModalLayer>
)

const OpenAddAlbumModal = ({ onClick }) => (
  <button onClick={onClick}>
    add album
  </button>
)
class AddAlbum extends React.Component {
  state = {
    open: false
  }
  toggleModal = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    const view = [
      <OpenAddAlbumModal onClick={this.toggleModal} />,
    ]
    if (this.state.open) {
      view.push(
        <AddAlbumModal onClose={this.toggleModal} />
      )
    }
    return view
  }
}
export default AddAlbum
