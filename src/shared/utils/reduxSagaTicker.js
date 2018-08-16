
import { eventChannel } from 'redux-saga';

function reduxSagaTicker(interval) {
  return eventChannel((emit) => {
    const intervalId = setInterval(() => emit(true), interval);
    return () => {
      clearInterval(intervalId);
    };
  });
}

export default reduxSagaTicker;
