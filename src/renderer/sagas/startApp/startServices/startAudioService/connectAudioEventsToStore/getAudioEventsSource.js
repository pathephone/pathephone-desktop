import { eventChannel, END } from 'redux-saga'

import getBufferedAudioMap from '~utils/getBufferedAudioMap'
import {
  systemAudioEnded,
  systemAudioTimingChanged,
  systemAudioReadyToPlay,
  systemAudioBufferingProceed,
  systemAudioDurationRecieved,
  systemAudioPlayed,
  systemAudioPaused,
  systemAudioLoadStarted
} from '#actions-system'

function getAudioEventsChannel (audio) {
  return eventChannel(emit => {
    const handleMetadata = () => {
      emit(systemAudioDurationRecieved(audio.duration))
    }
    const handleProgress = () => {
      const bufferedMap = getBufferedAudioMap(audio)
      if (bufferedMap) {
        emit(systemAudioBufferingProceed(bufferedMap))
      }
    }
    const handleCanPlayThrough = () => {
      emit(systemAudioReadyToPlay())
    }
    const handleTimeUpdate = () => {
      const { currentTime } = audio
      emit(systemAudioTimingChanged(currentTime))
    }
    const handleEnded = () => {
      emit(systemAudioEnded())
    }
    const handlePlay = () => {
      emit(systemAudioPlayed())
    }
    const handlePause = () => {
      emit(systemAudioPaused())
    }
    const handleLoadStart = () => {
      emit(systemAudioLoadStarted())
    }

    audio.onloadedmetadata = handleMetadata
    audio.oncanplaythrough = handleCanPlayThrough
    audio.onprogress = handleProgress
    audio.onended = handleEnded
    audio.ontimeupdate = handleTimeUpdate
    audio.onplay = handlePlay
    audio.onpause = handlePause
    audio.onloadstart = handleLoadStart

    return () => emit(END)
  })
}

export default getAudioEventsChannel
