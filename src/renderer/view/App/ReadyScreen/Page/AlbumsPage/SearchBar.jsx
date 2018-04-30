import React from 'react'
import propTypes from 'prop-types'

import MdClose from 'react-icons/lib/md/close'

const SearchBar = ({ searchValue, onSearchValueChange, onCancelSearch }) => {
  const handleChange = e => {
    const { value } = e.currentTarget
    onSearchValueChange(value)
  }
  const handleCancelSearch = () => {
    onCancelSearch()
  }
  return (
    <div className='albums-page__search-bar'>
      <input
        id='albums-search'
        placeholder='search albums'
        className='albums-page__search-input'
        type='text'
        value={searchValue}
        onChange={handleChange}
      />
      {
        searchValue && (
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

SearchBar.propTypes = {
  searchValue: propTypes.string.isRequired,
  onSearchValueChange: propTypes.func.isRequired,
  onCancelSearch: propTypes.func.isRequired
}

export default SearchBar
