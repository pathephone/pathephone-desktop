import React from 'react'
import MdCover from 'react-icons/lib/md/album'
import MdBroken from 'react-icons/lib/md/broken-image'
import MdSync from 'react-icons/lib/md/sync'
import Async from '@/Async'
import DNDarea from '@/DNDarea'
import putFilesToIpfs from '~/scripts/putFilesToIpfs'
import multihashToUrl from '~/scripts/multihashToUrl'

const checkIsImage = (file) => {
  return file.type.includes('image')
}

export const getImageFromFiles = async (files) => {
  files = files.filter(checkIsImage) // only images
  if (files.length > 0) {
    return (await putFilesToIpfs(files))[0].hash
  }
}

const CoverPreview = ({ data }) => (
  <div
    className='izi-y izi-center izi-fill'
    style={{
      backgroundImage: `url(${data})`,
      backgroundSize: 'cover'
    }}
  />
)

const SyncCover = () => (
  <MdSync
    className='sync-icon izi-gray rotating'
  />
)

const BrokenCover = () => (
  <MdBroken
    className='broken-image-icon izi-gray'
  />
)

const NoCover = () => (
  <MdCover
    className='no-cover-icon izi-gray'
  />
)

class CoverInput extends React.Component {
  handleFiles = async (files) => {
    const { onChange } = this.props
    try {
      const imageHash = await getImageFromFiles(Array.from(files))
      setTimeout(() => onChange(imageHash), 0)
    } catch (error) {
      console.error(error)
    }
  }
  shouldComponentUpdate (nextProps) {
    return nextProps.value !== this.props.value
  }
  render () {
    const { value } = this.props
    return (
      <div className='cover-upload izi-margin-left izi-relative '>
        <DNDarea
          className='izi-y izi-center izi-fill'
          onChange={this.handleFiles}
        >
          {
            value ? (
              <Async
                call={() => multihashToUrl(value)}
                readyView={CoverPreview}
                errorView={BrokenCover}
                waitView={SyncCover}
              />
            ) : (
              <NoCover />
            )
          }
        </DNDarea>
        <style jsx>{`
.cover-upload {
  position: relative;
  flex-shrink: 0;
  height: 10em;
  width: 10em;
  border: 1px solid #d3d3d3;
  padding: 0.25em;
}
        `}</style>
      </div>
    )
  }
}

export default CoverInput
