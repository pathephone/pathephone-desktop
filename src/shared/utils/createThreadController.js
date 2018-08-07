import { fork } from 'child_process';
import path from 'path';

const createThreadController = (threadName) => {
  let inc = 0;
  const thread = fork(path.resolve(__dirname, `threads/${threadName}.thread.js`));
  thread.call = ({ type, payload }) => {
    const requestId = `${++inc}`;
    return new Promise((resolve, reject) => {
      const handleMessage = (data) => {
        const { responseId, payload, errorMessage } = data;
        if (responseId === requestId) {
          thread.removeListener('message', handleMessage);
          if (errorMessage) {
            reject(new Error(errorMessage));
          } else {
            resolve(payload);
          }
        }
      };
      thread.on('message', handleMessage);
      thread.send({
        requestId,
        type,
        payload,
      });
    });
  };
  return thread;
};

export default createThreadController;
