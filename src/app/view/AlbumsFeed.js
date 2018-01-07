import React from 'react'
import Album from './AlbumsFeed/Album'
import SelectedActions from './AlbumsFeed/SelectedActions'

import addAlbums from './AlbumsFeed/addAlbums'
import playAlbums from './AlbumsFeed/playAlbums'
import deleteAlbums from './AlbumsFeed/deleteAlbums'

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
          selected.length > 0 && [
            <hr key='divider' />,
            <SelectedActions {...this.getSelectedActionsProps()} key='actions' />
          ]
        }
        <style jsx>{`
.albums-feed {
  display: grid;
  grid-template-columns: repeat(auto-fill, 12.5em) ;
  justify-content: space-around;
  align-content: flex-start;
  grid-gap: 1em;
  padding: 1em;
  overflow-y: auto;
  flex-basis: 100%;
  flex-shrink: 1;
}
hr {
  width: 100%;
}
      `}</style>
      </div>
    )
  }
}

export default AlbumsFeed
