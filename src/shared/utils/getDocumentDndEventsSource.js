import { eventChannel } from 'redux-saga';
import {
  DND_EVENT_TYPE_DRAG,
  DND_EVENT_TYPE_DRAG_OVER,
  DND_EVENT_TYPE_DRAG_ENTER,
  DND_EVENT_TYPE_DRAG_LEAVE,
  DND_EVENT_TYPE_DROP,
  DND_EVENT_TYPE_DRAG_START,
  DND_EVENT_TYPE_DRAG_END,
} from '~data/constants';

function getDocumentDndEventsSource() {
  return eventChannel((emit) => {
    const onDrag = (e) => {
      const payload = e.dataTransfer;
      emit({
        type: DND_EVENT_TYPE_DRAG,
        payload,
      });
    };
    const onDragStart = (e) => {
      const payload = e.dataTransfer;
      emit({
        type: DND_EVENT_TYPE_DRAG_START,
        payload,
      });
    };
    const onDragOver = (e) => {
      const payload = e.dataTransfer;
      emit({
        type: DND_EVENT_TYPE_DRAG_OVER,
        payload,
      });
    };
    const onDragEnter = (e) => {
      const payload = e.dataTransfer;
      emit({
        type: DND_EVENT_TYPE_DRAG_ENTER,
        payload,
      });
    };
    const onDragLeave = (e) => {
      const payload = e.dataTransfer;
      emit({
        type: DND_EVENT_TYPE_DRAG_LEAVE,
        payload,
      });
    };
    const onDragEnd = (e) => {
      const payload = e.dataTransfer;
      emit({
        type: DND_EVENT_TYPE_DRAG_END,
        payload,
      });
    };
    const onDrop = (e) => {
      const payload = e.dataTransfer;
      emit({
        type: DND_EVENT_TYPE_DROP,
        payload,
      });
    };
    document.addEventListener('drag', onDrag);
    document.addEventListener('dragstart', onDragStart);
    document.addEventListener('dragover', onDragOver);
    document.addEventListener('dragenter', onDragEnter);
    document.addEventListener('dragleave', onDragLeave);
    document.addEventListener('dragend', onDragEnd);
    document.addEventListener('drop', onDrop);
    return () => {
      document.removeEventListener('drag', onDrag);
      document.removeEventListener('dragstart', onDragStart);
      document.removeEventListener('dragover', onDragOver);
      document.removeEventListener('dragenter', onDragEnter);
      document.removeEventListener('dragleave', onDragLeave);
      document.removeEventListener('dragend', onDragEnd);
      document.removeEventListener('drop', onDrop);
    };
  });
}

export default getDocumentDndEventsSource;
