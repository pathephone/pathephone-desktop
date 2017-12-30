import playlistState, { state as playlistData } from '../state/playlist'
import {state as playerData} from '../state/player'

const getNextTrack = () => {
  const {shuffle, repeat, shufflePath} = playerData
  const currentIndex = playlistData.findIndex(
    ({ current }) => current
  )
  const nextCurrent = playlistData[currentIndex + 1]
  if (shuffle) { // проигрывание переменашнной песни
    shufflePath.push(playlistData[currentIndex])
    let notPlayed = playlistData.filter(el => shufflePath.indexOf(el) === -1)
    if (notPlayed.length === 0) { // список воспроизведения закончился
      playerData.shufflePath = [] // сбрасываем список случайных при оставноке проигрывания
      if (!repeat) {
        return
      } else {
        shufflePath.push(playlistData[currentIndex])
        notPlayed = playlistData.slice() // мы все послушали - поэтому теперь у нас весь список непрослушенных опять (копия), и удаляем в нем сразу текущую песню
        notPlayed.splice(currentIndex, 1)
      }
    }
    const randomSong = notPlayed[Math.floor(Math.random() * notPlayed.length)]
    return randomSong
  } else if (repeat && !nextCurrent && playlistData.length > 0) { // переход на 1 запись плейлиста если обычный повтор
    return playlistData[0]
  }
  return nextCurrent
}

const playNextTrack = () => {
  const nextTrack = getNextTrack()
  if (nextTrack) {
    const { id } = nextTrack
    playlistState('SET_CURRENT', id)
  } else {
    playlistState('UNSET_CURRENT')
  }
}

export default playNextTrack
