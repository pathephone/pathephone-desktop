import React from 'react'

import './DNDarea.css'

class DNDarea extends React.Component {
  handleChange = (e) => {
    const { files } = e.currentTarget
    if (files.length === 0) return
    this.props.onChange(files)
  }
  render () {
    const { children, className, style, ...input } = this.props
    return (
      <div className='izi-relative izi-fill' style={style}>
        {
          children
        }
        <input
          {...input}
          ref={c => { this.input = c }}
          onChange={this.handleChange}
          type='file'
          className='dnd__input izi-fill izi-absolute izi-top izi-left'
        />
      </div>
    )
  }
}

export default DNDarea
