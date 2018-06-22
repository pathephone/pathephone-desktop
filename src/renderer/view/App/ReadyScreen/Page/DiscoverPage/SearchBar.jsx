import React from 'react'
import propTypes from 'prop-types'

import MdClose from 'react-icons/lib/md/close'

import './SearchBar.css'
import { E2E_DISCOVER_PAGE_SEARCH_INPUT_ID } from '~data/e2eConstants'

class SearchBar extends React.Component {
  handleChange = e => {
    const { value } = e.currentTarget
    const {
      onSearchValueChange,
      onCancelSearch
    } = this.props
    if (value === '') {
      onCancelSearch()
    } else {
      onSearchValueChange(value)
    }
  }
  handleCancelSearchClicked = () => {
    const { onCancelSearch } = this.props
    onCancelSearch()
  }
  render () {
    const { searchValue } = this.props
    return (
      <div className='albums-page__search-bar'>
        <input
          id={E2E_DISCOVER_PAGE_SEARCH_INPUT_ID}
          placeholder='Search albums'
          className='albums-page__search-input'
          type='text'
          value={searchValue}
          onChange={this.handleChange}
        />
        <button
          disabled={searchValue === ''}
          id='cancel-search'
          className='albums-page__cancel-search round-button'
          onClick={this.handleCancelSearchClicked}
        >
          <MdClose />
        </button>

      </div>
    )
  }
}

SearchBar.propTypes = {
  searchValue: propTypes.string.isRequired,
  onSearchValueChange: propTypes.func.isRequired,
  onCancelSearch: propTypes.func.isRequired
}

export default SearchBar
