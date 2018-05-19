import { eventChannel, END } from 'redux-saga'

import getBufferedAudioMap from '~utils/getBufferedAudioMap'
import {
  systemAudioPlaybackEnded,
  systemAudioTimingChanged,
  systemAudioReadyToPlay,
  systemAudioBufferingProceed,
  systemAudioDurationRecieved
} from '#actions-system'

function getAudioEventsChannel (audio) {
  return eventChannel(emit => {
    const handleMetadata = () => {
      emit(systemAudioDurationRecieved(audio.duration))
    }
    const handleProgress = () => {
      const bufferedMap = getBufferedAudioMap(audio)
      console.log(bufferedMap)
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
      emit(systemAudioPlaybackEnded())
    }

    audio.onloadedmetadata = handleMetadata
    audio.oncanplaythrough = handleCanPlayThrough
    audio.onprogress = handleProgress
    audio.onended = handleEnded
    audio.ontimeupdate = handleTimeUpdate

    return () => emit(END)
  })
}

export default getAudioEventsChannel
