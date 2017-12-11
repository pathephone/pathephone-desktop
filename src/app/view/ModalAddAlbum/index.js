import React from 'react'
import ModalLayer from '../_/ModalLayer'
import ModalWindow from '../_/ModalWindow'
import FormAlbum from './FormAlbum'

class ModalAddAlbum extends React.Component {
  state = {
    open: false
  }
  toggleModal = () => {
    this.setState({ open: !this.state.open })
  }
  ToggleButton = () => (
    <button onClick={this.toggleModal}>
      share album
    </button>
  )
  render() {
    if (this.state.open) {
      return [
        <this.ToggleButton />,
        <ModalLayer onMissClick={this.toggleModal}>
          <ModalWindow>
            <FormAlbum />
          </ModalWindow>
        </ModalLayer>
      ]
    }
    return <this.ToggleButton />
  }
}
export default ModalAddAlbum
