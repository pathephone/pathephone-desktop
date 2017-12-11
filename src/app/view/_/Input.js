import React from 'react'

const Input = ({ onChange, ...rest }) => (
  <input
    {...rest}
    onChange={e => {
      const { name, value } = e.currentTarget
      console.log(value)
      onChange(value, name)
    }}
  />
)

export default Input
