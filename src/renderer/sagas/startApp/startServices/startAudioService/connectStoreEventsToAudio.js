import { take, select } from 'redux-saga/effects'
import { uiPlaybackPaused, uiPlaybackResumed, uiVolumeChanged, uiPlaylistTrackPlayed, uiSeekStoped, uiPlaylistCleared, uiPlaylistTrackRemoved } from '#actions-ui'
import { getCurrentTrack, getCurrentTrackIndex } from '#selectors'
import { systemPlayedTracksRecieved, systemAudioEnded } from '#actions-system'
import withIpfsGateway from '~utils/withIpfsGateway'

function * connectStoreEventsToAudio (audio) {
  while (true) {
    const { type, payload } = yield take('*')
    switch (type) {
      case uiPlaybackPaused.toString():
        audio.pause()
        break
      case uiPlaybackResumed.toString():
        audio.play()
        break
      case uiSeekStoped.toString():
        audio.currentTime = payload
        break
      case uiVolumeChanged.toString():
        audio.volume = payload
        break
      case uiPlaylistTrackPlayed.toString():
      case uiPlaylistTrackRemoved.toString():
      case systemPlayedTracksRecieved.toString():
      case systemAudioEnded.toString(): {
        const track = yield select(getCurrentTrack)
        if (track) {
          audio.src = withIpfsGateway(track.cid)
          audio.play()
        } else {
          audio.pause()
          audio.src = ''
        }
        break
      }
      case uiPlaylistCleared.toString():
        audio.pause()
        audio.src = ''
        break
    }
  }
}

export default connectStoreEventsToAudio
