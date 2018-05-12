import { eventChannel } from 'redux-saga'
import { DND_EVENT_TYPE_OVER, DND_EVENT_TYPE_LEAVE, DND_EVENT_TYPE_ENTER } from '~data/constants'

function getDndEventsSource () {
  return eventChannel(emit => {
    const onDragOver = e => {
      const payload = e.dataTransfer
      emit({
        type: DND_EVENT_TYPE_OVER,
        payload
      })
    }
    const onDragEnter = e => {
      const payload = e.dataTransfer
      emit({
        type: DND_EVENT_TYPE_ENTER,
        payload
      })
    }
    const onDragLeave = () => {
      emit({
        type: DND_EVENT_TYPE_LEAVE
      })
    }
    document.addEventListener('dragover', onDragOver)
    document.addEventListener('dragenter', onDragEnter)
    document.addEventListener('dragleave', onDragLeave)
    return () => {
      document.removeEventListener('dragover', onDragOver)
      document.removeEventListener('dragenter', onDragEnter)
      document.removeEventListener('dragleave', onDragLeave)
    }
  })
}

export default getDndEventsSource
