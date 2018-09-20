
export type IBufferedMap = [number, number][];

type IParams = HTMLAudioElement;

type IGetBufferedAudioMap = (p: IParams) => IBufferedMap;

export const getBufferedAudioMap: IGetBufferedAudioMap = (
  { buffered, duration }: IParams
): IBufferedMap => {
  const bufferedMap: IBufferedMap = [];
  const percent: number = duration / 100;
  if (buffered.length > 0) {
    for (let i: number = 0; i < buffered.length; i += 1) {
      const start: number = buffered.start(i) / percent;
      const end: number = buffered.end(i) / percent;
      bufferedMap.push([start, end]);
    }
  } else {
    const start: number = buffered.start(0) / percent;
    const end: number = buffered.end(0) / percent;
    bufferedMap.push([start, end]);
  }

  return bufferedMap;
};
