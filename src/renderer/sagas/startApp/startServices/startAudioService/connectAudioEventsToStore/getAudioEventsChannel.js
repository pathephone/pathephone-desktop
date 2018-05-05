import { eventChannel, END } from 'redux-saga'

import {
  audioLoadStart,
  audioReadyToPlay,
  audioLoadProgress,
  audioEnd,
  audioTimingChange
} from '#actions'

import getBufferedAudioMap from '~utils/getBufferedAudioMap'

function getAudioEventsChannel (audio) {
  return eventChannel(emit => {
    const handleLoadStart = () => {
      emit(audioLoadStart())
    }
    const handleProgress = () => {
      const bufferedMap = getBufferedAudioMap(audio)
      emit(audioLoadProgress(bufferedMap))
    }
    const handleCanPlayThrough = () => {
      emit(audioReadyToPlay())
    }
    const handleTimeUpdate = () => {
      const { currentTime } = audio
      emit(audioTimingChange(currentTime))
    }
    const handleEnded = () => {
      emit(audioEnd())
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
