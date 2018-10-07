let inc: number = 0;

interface IMessage<TPayload> {
  // tslint:disable no-reserved-keywords
  type: string;
  payload: TPayload;
}

interface IWorkerEvent<TResponse> {
  data: {
    responseId: string;
    payload: TResponse;
    errorMessage?: string;
  };
}

type ICallWorkerMethod = <TP, TR>(w: Worker, m: IMessage<TP>) => Promise<TR>;

export const callWorkerMethod: ICallWorkerMethod = <TPayload, TResponse>(
  worker: Worker, message: IMessage<TPayload>
): Promise<TResponse> => {
  const requestId: string = `${inc += 1}`;

  return new Promise(
    (resolve: (p: TResponse) => void, reject: (e: Error) => void): void => {

      const handleMessage: (e: IWorkerEvent<TResponse>) => void = (
        { data }: IWorkerEvent<TResponse>
      ): void => {
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
        type: message.type,
        payload: message.payload
      });

    }
  );
};
