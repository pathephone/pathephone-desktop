import React from 'react'
import GetFileBlob from './GetFileBlob'

const GetFileUrl = (props) => {
  const ResolveView = (props) => {
    if (props.data) {
      props.data = URL.createObjectURL(props.data)
    }
    return <props.view {...props} />
  }
  return (
    <GetFileBlob
      hash={props.hash}
      view={ResolveView}
    />
  )
}

export default GetFileUrl
