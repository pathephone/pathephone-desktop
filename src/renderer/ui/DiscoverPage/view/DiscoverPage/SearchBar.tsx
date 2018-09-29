import React from 'react';
import MdClose from 'react-icons/lib/md/close';

import e2e from '~shared/data/e2e';
import i18n from '~shared/data/i18n';

import './SearchBar.css';

interface IProps {
  searchValue: string;
  albumsCount: number;
  onFormSubmit(v: string): void;
  onCancelSearch(): void;
}

interface IState {
  inputValue: string;
}

export class SearchBar extends React.Component<IProps, IState> {

  public state: IState = {
    inputValue: this.props.searchValue
  };

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.inputValue);
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    this.setState(() => ({ inputValue: value }));
    if (value === '' && this.props.searchValue !== '') {
      this.props.onCancelSearch();
    }
  }

  public handleCancelSearchClicked = (): void => {
    const { onCancelSearch } = this.props;
    this.setState(() => ({ inputValue: '' }));
    onCancelSearch();
  }

  public render(): React.ReactElement<IProps> {
    const { inputValue } = this.state;
    const { albumsCount } = this.props;
    const placeholder: string = `${i18n.SEARCH_IN_ALBUMS_COLLECTION} (${albumsCount})`;

    return (
      <form className='albums-page__search-bar' onSubmit={this.handleSubmit}>
        <input
          id={e2e.DISCOVER_PAGE_SEARCH_INPUT_ID}
          placeholder={placeholder}
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
    );
  }
}
