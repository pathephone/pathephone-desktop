
const createWorkerController = (Worker) => {
  let inc = 0;
  const worker = new Worker();
  worker.call = ({ type, payload }) => {
    const requestId = `${inc += 1}`;
    return new Promise((resolve, reject) => {
      const handleMessage = ({ data }) => {
        const { responseId, payload: messagePayload, errorMessage } = data;
        if (responseId === requestId) {
          worker.removeEventListener('message', handleMessage);
          if (errorMessage) {
            reject(new Error(errorMessage));
          } else {
            resolve(messagePayload);
          }
        }
      };
      worker.addEventListener('message', handleMessage);
      worker.postMessage({
        requestId,
        type,
        payload,
      });
    });
  };
  return worker;
};

export default createWorkerController;
