import React from 'react'
import propTypes from 'prop-types'

import MdClose from 'react-icons/lib/md/close'

import './SearchBar.css'
import { E2E_DISCOVER_PAGE_SEARCH_INPUT_ID } from '~data/e2eConstants'

class SearchBar extends React.Component {
  state = {
    inputValue: this.props.searchValue
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.inputValue)
  }
  handleChange = e => {
    const { value } = e.currentTarget
    this.setState(() => ({ inputValue: value }))
    if (value === '') {
      this.props.onCancelSearch()
    }
  }
  handleCancelSearchClicked = () => {
    const { onCancelSearch } = this.props
    this.setState(() => ({ inputValue: '' }))
    onCancelSearch()
  }
  render () {
    const { inputValue } = this.state
    return (
      <form className='albums-page__search-bar' onSubmit={this.handleSubmit}>
        <input
          id={E2E_DISCOVER_PAGE_SEARCH_INPUT_ID}
          placeholder='Search albums'
          className='albums-page__search-input'
          type='text'
          value={inputValue}
          onChange={this.handleChange}
        />
        <button
          type='button'
          disabled={inputValue === ''}
          id='cancel-search'
          className='albums-page__cancel-search round-button'
          onClick={this.handleCancelSearchClicked}
        >
          <MdClose />
        </button>
      </form>
    )
  }
}

SearchBar.propTypes = {
  searchValue: propTypes.string.isRequired,
  onFormSubmit: propTypes.func.isRequired,
  onCancelSearch: propTypes.func.isRequired
}

export default SearchBar
