import React from 'react'
import MdDrop from 'react-icons/lib/md/arrow-downward'
import DNDarea from '~components/DNDarea'

import getAlbumObjectFromFiles from '~utils/getAlbumObjectFromFiles'

import './FormDNDAlbum.css'

class FormDNDAlbum extends React.Component {
  state = {
    processing: false
  }
  toggleProcessing = () => {
    this.setState({
      processing: !this.state.processing
    })
  }
  handleIncomingFiles = async (files) => {
    this.toggleProcessing()
    const albumObject = await getAlbumObjectFromFiles(files)
    this.props.onChange(albumObject)
    this.toggleProcessing()
  }
  render () {
    const { processing } = this.state
    return (
      <div
        className='izi-padding izi-ys izi-fill-width'
      >
        <fieldset>
          <DNDarea
            multiple
            onChange={this.handleIncomingFiles}
          >
            <div className='dnd-album izi-padding izi-y izi-center izi-gray'>
              {
                processing ? [
                  <MdDrop className='sync-icon rotating' key='icon' />,
                  <label className='izi-uppercase' key='label'>processing...</label>
                ] : [
                  <MdDrop className='dnd-icon animated infinite bounce' key='icon' />,
                  <label className='izi-uppercase' key='label'>drop here</label>
                ]
              }
            </div>
          </DNDarea>
        </fieldset>
      </div>
    )
  }
}

export default FormDNDAlbum
