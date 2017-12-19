import React from 'react'
import AddAlbumModal from './AddAlbum/AddAlbumModal'

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
  render () {
    const view = [
      <OpenAddAlbumModal onClick={this.toggleModal} key='button' />
    ]
    if (this.state.open) {
      view.push(
        <AddAlbumModal onClose={this.toggleModal} key='modal' />
      )
    }
    return view
  }
}
export default AddAlbum
