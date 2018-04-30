import { eventChannel, END } from 'redux-saga'

import {
  reportAudioLoadStart,
  reportAudioReadyToPlay,
  reportAudioLoadProgress,
  reportAudioPlaybackEnd,
  reportAudioPlaybackTimeUpdate
} from '#actions'

import getBufferedAudioMap from '~utils/getBufferedAudioMap'

function getAudioEventsChannel (audio) {
  return eventChannel(emit => {
    const handleLoadStart = () => {
      emit(reportAudioLoadStart())
    }
    const handleProgress = () => {
      const bufferedMap = getBufferedAudioMap(audio)
      emit(reportAudioLoadProgress(bufferedMap))
    }
    const handleCanPlayThrough = () => {
      emit(reportAudioReadyToPlay())
    }
    const handleTimeUpdate = () => {
      const { currentTime } = audio
      emit(reportAudioPlaybackTimeUpdate(currentTime))
    }
    const handleEnded = () => {
      emit(reportAudioPlaybackEnd())
    }

    audio.onloadstart = handleLoadStart
    audio.oncanplaythrough = handleCanPlayThrough
    audio.onprogress = handleProgress
    audio.onended = handleEnded
    audio.ontimeupdate = handleTimeUpdate
    return () => emit(END)
  })
}

export default getAudioEventsChannel
