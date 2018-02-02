import React from 'react'
import Album from './AlbumsFeed/Album'
import SelectedActions from './AlbumsFeed/SelectedActions'

import addAlbums from './AlbumsFeed/addAlbums'
import playAlbums from './AlbumsFeed/playAlbums'
import deleteAlbums from './AlbumsFeed/deleteAlbums'

import './AlbumsFeed/AlbumsFeed.css'

class AlbumsFeed extends React.Component {
  state = {
    selected: []
  }
  selectAlbums = (cids) => {
    const { selected } = this.state
    const eachHandler = (cid) => {
      const index = selected.findIndex(
        scid => scid === cid
      )
      if (index > -1) {
        selected.splice(index, 1)
      } else {
        selected.push(cid)
      }
    }
    cids.forEach(eachHandler)
    this.setState({ selected })
  }
  clearSelected = () => {
    this.setState({
      selected: []
    })
  }
  getSelectedActionsProps = () => {
    const { selected } = this.state
    return {
      onAdd: () => {
        addAlbums(selected)
        this.clearSelected()
      },
      onPlay: () => {
        playAlbums(selected)
        this.clearSelected()
      },
      onDelete: () => {
        deleteAlbums(selected)
        this.clearSelected()
      },
      onClear: () => {
        this.clearSelected()
      },
      selectedNum: selected.length
    }
  }
  AlbumWrapper = (data) => {
    const { selected } = this.state
    const { cid } = data
    const onAdd = () => {
      addAlbums([cid])
    }
    const onPlay = () => {
      playAlbums([cid])
    }
    const onSelect = () => {
      this.selectAlbums([cid])
    }
    const props = {
      ...data,
      selected,
      onAdd,
      onPlay,
      onSelect
    }
    return (
      <Album {...props} key={cid} />
    )
  }
  render () {
    const { albums } = this.props
    const { selected } = this.state
    return (
      <div className='albums-feed__wrapper izi-fill izi-ys'>
        <div id='albums-feed' className='albums-feed'>
          {
            albums.map(this.AlbumWrapper)
          }
        </div>
        {
          selected.length > 0 && (
            <SelectedActions {...this.getSelectedActionsProps()} key='actions' />
          )
        }
      </div>
    )
  }
}

export default AlbumsFeed
