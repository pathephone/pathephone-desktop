interface IGenericAction<TPayload = void> {
  payload: TPayload;
  // tslint:disable-next-line no-reserved-keywords
  type: string;
}

export type IActionCreator<TPayload = void> = (payload: TPayload) => IGenericAction<TPayload>;

type IActionCreatorFactory = <TPayload>(postfix: string) => IActionCreator<TPayload>;

type IGetActionCreatorFactory = (prefix: string) => IActionCreatorFactory;

const getActionCreatorFactory: IGetActionCreatorFactory = (
  (prefix: string): IActionCreatorFactory => (
    <TPayload> (postfix: string): IActionCreator<TPayload> => {
      const actionType: string = `@${prefix}/${postfix}`;
      const creator: IActionCreator<TPayload> = (
        payload: TPayload
      ): IGenericAction<TPayload> => ({
        payload,
        type: actionType
      });
      creator.toString = (): string => actionType;

      return creator;
    }
  )
);

export const uiAction: IActionCreatorFactory = getActionCreatorFactory('ui');
export const systemAction: IActionCreatorFactory = getActionCreatorFactory('system');
