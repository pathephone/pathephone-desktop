import playlistState, { state as playlistData } from '../state/playlist'
import {state as playerData} from '../state/player'

const playNextTrack = () => {
  const {shuffle, repeat, shufflePath} = playerData
  const currentIndex = playlistData.findIndex(
    ({ current }) => current
  )
  let nextCurrent = playlistData[currentIndex + 1]
  if (shuffle) { // проигрывание переменашнной песни
    shufflePath.push(playlistData[currentIndex])
    let notPlayed = playlistData.filter(el => shufflePath.indexOf(el) === -1)
    if (notPlayed.length === 0) {
      playerData.shufflePath = [] // сбрасываем список случайных при оставноке проигрывания
      if (!repeat) {
        playlistState('DROP_CURRENT')
        return
      } else {
        shufflePath.push(playlistData[currentIndex])
        notPlayed = playlistData.slice() // мы все послушали - поэтому теперь у нас весь список непрослушенных опять (копия), и удаляем в нем сразу текущую песню
        notPlayed.splice(currentIndex, 1)
      }
    }
    const randomSong = notPlayed[Math.floor(Math.random() * notPlayed.length)]
    nextCurrent = randomSong
  }
  if (nextCurrent) {
    const { id } = nextCurrent
    playlistState('SET_CURRENT', id)
  } else {
    if (repeat && playlistData.length > 0) { // переход на 1 запись плейлиста если повтор
      playlistState('SET_CURRENT', playlistData[0].id)
      return
    }
    playlistState('DROP_CURRENT')
  }
}

export default playNextTrack
