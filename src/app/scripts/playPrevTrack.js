import playlistState, { state as playlistData } from '../state/playlist'
import {state as playerData} from '../state/player'

const playPrevTrack = () => {
  const {shuffle, repeat, shufflePath} = playerData
  const currentIndex = playlistData.findIndex(
    ({ current }) => current
  )
  let nextCurrent = playlistData[currentIndex - 1]
  if (shuffle && shufflePath.length > 0) {
    nextCurrent = shufflePath.pop()
  }
  if (nextCurrent) {
    const { id } = nextCurrent
    playlistState('SET_CURRENT', id)
  } else {
    if (!repeat) { playlistState('SET_CURRENT', playlistData[currentIndex].id) } else { playlistState('SET_CURRENT', playlistData[playlistData.length - 1].id) } // если у нас рипит включаем последний трек опять
  }
}

export default playPrevTrack
