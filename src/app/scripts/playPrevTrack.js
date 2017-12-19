import playlistState, { state as playlistData } from '../state/playlist'
import {state as playerData} from '../state/player'

const getPrevTrack = () => {
  const {shuffle, repeat, shufflePath} = playerData
  const currentIndex = playlistData.findIndex(
    ({ current }) => current
  )
  const prevCurrent = playlistData[currentIndex - 1]
  if (shuffle && shufflePath.length > 0) {
    return shufflePath.pop() // достаем предыдущую песню из запомненного пути следования по трекам (если такой есть)
  }
  if (repeat && !prevCurrent) {
    return playlistData[playlistData.length - 1]
  }
  return prevCurrent
}

const playPrevTrack = () => {
  const prevTrack = getPrevTrack()
  if (prevTrack) {
    const { id } = prevTrack
    playlistState('SET_CURRENT', id)
  } else {
    playlistState('SET_CURRENT', playlistData[0].id)
  }
}

export default playPrevTrack
