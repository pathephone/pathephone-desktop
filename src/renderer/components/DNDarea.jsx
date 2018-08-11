import React from 'react'

import './DNDarea.css'

class DNDarea extends React.Component {
  handleChange = (e) => {
    const { files } = e.currentTarget
    this.props.onChange(files)
  }
  render () {
    const { children, style, ...input } = this.props
    return (
      <div className='DNDAreaContainer' style={style}>
        {children}
        <input
          {...input}
          ref={c => { this.input = c }}
          onChange={this.handleChange}
          type='file'
          className='DNDAreaInput'
        />
      </div>
    )
  }
}

export default DNDarea
