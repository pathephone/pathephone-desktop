import React from 'react'

const SearchBar = ({ onChange }) => {
  const handleChange = e => {
    const { value } = e.currentTarget
    onChange(value)
  }
  return (
    <input
      placeholder='search albums'
      className='albums-page__search-input'
      type='text'
      onChange={handleChange}
    />
  )
}

export default SearchBar
