import React from 'react'
import GetFile from './File'
import StreamToBlob from './StreamToBlob'

const GetImage = ({ hash, view }) => (
  <GetFile
    hash={hash}
    view={
      ({ data }) => <StreamToBlob stream={data} view={view} />
    }
  />
)

export default GetImage
