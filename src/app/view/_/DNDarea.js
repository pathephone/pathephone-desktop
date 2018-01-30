import React from 'react'

class DNDarea extends React.Component {
  handleChange = (e) => {
    const { files } = e.currentTarget
    if (files.length === 0) return
    this.props.onChange(files)
  }
  render () {
    const { children, className, style, ...input } = this.props
    return (
      <div className={className} style={style}>
        {
          children
        }
        <input
          {...input}
          ref={c => { this.input = c }}
          onChange={this.handleChange}
          type='file'
          className='cover-upload-input izi-fill izi-absolute izi-top izi-left'
        />
        <style jsx>{`
div {
  position: relative;
}
.cover-upload-input {
  opacity: 0;
  cursor: pointer;
}
        `}</style>
      </div>
    )
  }
}

export default DNDarea
