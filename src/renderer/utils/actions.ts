interface IGenericAction<TPayload> {
  payload: TPayload;
  // tslint:disable-next-line no-reserved-keywords
  type: string;
}

export type IActionCreator<TPayload> = (payload: TPayload) => IGenericAction<TPayload>;

type IActionCreatorCreator = <TPayload>(postfix: string) => IActionCreator<TPayload>;

type IActionCreatorCreatorFactory = (prefix: string) => IActionCreatorCreator;

const actionCreatorCreatorFactory: IActionCreatorCreatorFactory = (
  prefix: string
): IActionCreatorCreator => (
  <TPayload> (postfix: string) : IActionCreator<TPayload> => {
    const actionType: string = `@${prefix}/${postfix}`;

    return (payload: TPayload) : IGenericAction<TPayload> => ({
      payload,
      type: actionType
    });
  }
);

export const uiAction: IActionCreatorCreator = actionCreatorCreatorFactory('ui');
export const systemAction: IActionCreatorCreator = actionCreatorCreatorFactory('system');
