import React from 'react'
import ModalWindow from '@/ModalWindow'
import FormAlbum from './FormAlbum'

class AddAlbumModal extends React.Component {
  state = {
    dnd: false
  }
  dragCounter = 0
  handleDragEnter = (e) => {
    this.dragCounter++
    console.log('ENTER ' + this.dragCounter)
    this.setState({ dnd: true })
  }
  handleDragLeave = (e) => {
    this.dragCounter--
    if (e.target === this.dropZone && this.dragCounter === 0) {
      this.setState({ dnd: false })
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
        className='modal-layer izi-fixed izi-fill izi-top izi-left izi-y'
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >
        <ModalWindow onClose={onClose} title='Add Album'>
          <FormAlbum
            onSuccess={onClose}
            onFilesProcessed={this.handleFilesProcessed}
            {...this.state}
          />
        </ModalWindow>
        <style jsx>{`
.modal-layer {
  background-color: rgba(10,10,10,0.5);
  overflow-y: auto;
}
        `}</style>
      </div>
    )
  }
}

export default AddAlbumModal
