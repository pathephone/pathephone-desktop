import React from 'react'
import GetFileBlob from './GetFileBlob'

const GetFileUrl = (props) => (
  <GetFileBlob
    hash={props.hash}
    view={
      ({ data }) => {
        const url = URL.createObjectURL(data)
        return <props.view url={url} />
      }
    }
  />
)

export default GetFileUrl
