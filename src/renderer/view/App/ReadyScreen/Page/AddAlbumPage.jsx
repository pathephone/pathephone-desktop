import React from 'react'
import ModalWindow from '~components/ModalWindow'
import ModalWindowHeader from '~components/ModalWindowHeader'
import FormAlbum from './AddAlbumPage/FormAlbum'

class AddAlbumModal extends React.Component {
  state = {
    dnd: false
  }
  handleDragEnter = (e) => {
    this.ignoreDNDLeave = true // handleDragEnter срабатывает всегда перед handleDragLeave и только в случае если это какие действия внутри окна, это переменная и будет отвечать за то чтобы отделить эти 2 случая
    if (this.state.dnd) { setTimeout(() => { this.ignoreDNDLeave = false }, 0) } // handleDragLeave срабатывает РАНЬШЕ чем таймер, поэтому ignoreDNDLeave может не быть только в случае выхода курсора за приложение, а при наведении на разные элементы он будет всегда установлен
    if (!this.state.dnd) {
      this.setState({ dnd: true })
    }
  }
  handleDragLeave = (e) => {
    if (this.state.dnd && this.dropZone === e.target && !this.ignoreDNDLeave) {
      this.setState({ dnd: false })
      delete this.ignoreDNDLeave
    }
  }
  handleFilesProcessed = () => {
    this.setState({ dnd: false })
  }
  render () {
    const { onClose } = this.props
    return (
      <div
        ref={c => { this.dropZone = c }}
        className='modal-layer'
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >
        <ModalWindow onClose={onClose} title='Add Album'>
          <ModalWindowHeader title='Add album' onClose={onClose} />
          <FormAlbum
            onSuccess={onClose}
            onFilesProcessed={this.handleFilesProcessed}
            {...this.state}
          />
        </ModalWindow>
      </div>
    )
  }
}

export default AddAlbumModal
