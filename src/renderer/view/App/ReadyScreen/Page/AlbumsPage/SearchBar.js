import React from 'react'
import MdClose from 'react-icons/lib/md/close'

const SearchBar = ({ value, onChange, onCancel }) => {
  const handleChange = e => {
    const { value } = e.currentTarget
    onChange(value)
  }
  const handleCancelSearch = () => {
    onCancel()
  }
  return (
    <div className='albums-page__search-bar'>
      <input
        id='albums-search'
        placeholder='search albums'
        className='albums-page__search-input'
        type='text'
        value={value}
        onChange={handleChange}
      />
      {
        value && (
          <button
            id='cancel-search'
            className='albums-page__cancel-search round-button'
            onClick={handleCancelSearch}
          >
            <MdClose />
          </button>
        )
      }
    </div>
  )
}

export default SearchBar
