import React from 'react'
import GetFile from './File'
import StreamToBlob from './StreamToBlob'

const GetFileBlob = ({ hash, view }) => {
  const ResolveView = (props) => {
    if (props.data) {
      return <StreamToBlob stream={props.data} view={view} />
    }
    return <props.view {...props} />
  }
  return (
    <GetFile
      hash={hash}
      view={ResolveView}
    />
  )
}

export default GetFileBlob
